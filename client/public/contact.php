<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$ime = htmlspecialchars(trim($data['name'] ?? ''));
$email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$telefon = htmlspecialchars(trim($data['phone'] ?? ''));
$podjetje = htmlspecialchars(trim($data['company'] ?? ''));
$storitev = htmlspecialchars(trim($data['service'] ?? ''));
$sporocilo = htmlspecialchars(trim($data['message'] ?? ''));

if (empty($ime) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ime in email sta obvezna']);
    exit;
}

// Shrani v datoteko (JSON log)
$entry = [
    'datum' => date('Y-m-d H:i:s'),
    'ime' => $ime,
    'email' => $email,
    'telefon' => $telefon,
    'podjetje' => $podjetje,
    'storitev' => $storitev,
    'sporocilo' => $sporocilo
];

$logFile = __DIR__ . '/../inquiries.json';
$inquiries = [];
if (file_exists($logFile)) {
    $inquiries = json_decode(file_get_contents($logFile), true) ?? [];
}
$inquiries[] = $entry;
file_put_contents($logFile, json_encode($inquiries, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// Pošlji email
$to = 'info@spletnost.si';
$subject = 'Novo povpraševanje: ' . $ime . ' - ' . $podjetje;
$body = "Novo povpraševanje s spletne strani\n\n"
    . "Ime: $ime\n"
    . "Email: $email\n"
    . "Telefon: $telefon\n"
    . "Podjetje: $podjetje\n"
    . "Storitev: $storitev\n"
    . "Sporočilo: $sporocilo\n";
$headers = "From: noreply@ai.spletnost.si\r\nReply-To: $email";

mail($to, $subject, $body, $headers);

echo json_encode(['success' => true, 'message' => 'Povpraševanje je bilo uspešno poslano']);
?>
