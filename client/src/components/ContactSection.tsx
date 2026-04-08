/* ============================================================
   SPLETNOST AI – Contact Section + Footer
   Design: Dark bg, glassmorphism form, orange CTA,
   nebula gradient background, Spletnost footer
   ============================================================ */

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475639595/23zSpdwXTFDw8CXcrctubE/spletnost-logo-transparent_51e8b703.svg";

const services = [
  "AI Asistent za stranke (Chatbot)",
  "Avtomatizacija e-pošte",
  "Generiranje vsebine z AI",
  "Avtomatizacija prodajnega lijaka",
  "Poročila in analitika z AI",
  "Custom CRM aplikacija",
  "Skladiščni sistem",
  "Social Media avtomatizacija",
  "Drugo",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <>
      {/* Contact Section */}
      <section
        id="kontakt"
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{ background: "#0D1230" }}
      >
        {/* Background glow */}
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(248,76,0,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(74,0,235,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                style={{
                  background: "rgba(248, 76, 0, 0.1)",
                  border: "1px solid rgba(248, 76, 0, 0.25)",
                }}
              >
                <span className="orange-dot" />
                <span
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{ color: "#F84C00", fontFamily: "'Montserrat', sans-serif" }}
                >
                  Kontakt
                </span>
              </div>

              <h2
                className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Začnimo skupaj
                <br />
                <span className="gradient-text">brezplačen posvet</span>
              </h2>

              <p
                className="text-white/60 text-lg leading-relaxed mb-10"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Povejte nam o svojem podjetju in procesih. V 30 minutah vam pokažemo, katere avtomatizacije bi vam prinesle največ — brez obveznosti.
              </p>

              {/* Contact info */}
              <div className="space-y-4 mb-10">
                {[
                  { icon: Phone, label: "030 301 300", href: "tel:030301300" },
                  { icon: Mail, label: "info@spletnost.si", href: "mailto:info@spletnost.si" },
                  { icon: MapPin, label: "Slovenija", href: "#" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(248, 76, 0, 0.12)" }}
                    >
                      <item.icon size={18} style={{ color: "#F84C00" }} />
                    </div>
                    <span
                      className="text-white/70 group-hover:text-white transition-colors"
                      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* What you get */}
              <div
                className="glass-card rounded-2xl p-6"
                style={{ border: "1px solid rgba(248,76,0,0.15)" }}
              >
                <h4
                  className="text-white font-bold mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Kar dobite na brezplačnem posvetu:
                </h4>
                {[
                  "Analiza vaših procesov in priložnosti",
                  "Konkretni predlog avtomatizacij",
                  "Ocena prihrankov časa in denarja",
                  "Brez obveznosti, brez skritih stroškov",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={15} style={{ color: "#F84C00" }} />
                    <span
                      className="text-white/65 text-sm"
                      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card rounded-2xl p-10 text-center"
                  style={{ border: "1px solid rgba(248,76,0,0.2)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: "rgba(248, 76, 0, 0.15)" }}
                  >
                    <CheckCircle2 size={32} style={{ color: "#F84C00" }} />
                  </div>
                  <h3
                    className="text-2xl font-black text-white mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Sporočilo poslano!
                  </h3>
                  <p
                    className="text-white/60"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    Kontaktirali vas bomo v 24 urah za dogovor o brezplačnem posvetu.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card rounded-2xl p-7 space-y-5"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-white/60 text-xs font-semibold mb-1.5 tracking-wide uppercase"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Ime in priimek *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200 focus:border-orange-500"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                        placeholder="Janez Novak"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-white/60 text-xs font-semibold mb-1.5 tracking-wide uppercase"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        E-pošta *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                        placeholder="janez@podjetje.si"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-white/60 text-xs font-semibold mb-1.5 tracking-wide uppercase"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                        placeholder="031 123 456"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-white/60 text-xs font-semibold mb-1.5 tracking-wide uppercase"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Podjetje
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                        placeholder="Moje podjetje d.o.o."
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-white/60 text-xs font-semibold mb-1.5 tracking-wide uppercase"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Zanima me *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                    >
                      <option value="" style={{ background: "#0D1230" }}>
                        Izberite storitev...
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: "#0D1230" }}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-white/60 text-xs font-semibold mb-1.5 tracking-wide uppercase"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Sporočilo
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                      placeholder="Opišite vaše podjetje in procese, ki bi jih radi avtomatizirali..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Pošlji povpraševanje
                    <Send size={17} />
                  </button>

                  <p
                    className="text-white/30 text-xs text-center"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    Odgovorimo v 24 urah. Vaši podatki so varni in ne bodo posredovani tretjim osebam.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 border-t"
        style={{
          background: "#050710",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <img
              src={LOGO_URL}
              alt="Spletnost"
              className="h-9 w-auto mb-4"
              />
              <p
                className="text-white/40 text-sm leading-relaxed max-w-xs"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Spletnost je vaš partner za AI avtomatizacijo in digitalno transformacijo. Pomagamo podjetjem rasti z močjo umetne inteligence.
              </p>
            </div>

            {/* Links */}
            <div>
              <h5
                className="text-white font-bold text-sm mb-4 tracking-wide"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Storitve
              </h5>
              <ul className="space-y-2">
                {["AI Avtomatizacije", "Custom CRM", "Skladiščni sistem", "Social Media AI", "Spletni marketing"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/40 hover:text-white/70 text-sm transition-colors"
                        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h5
                className="text-white font-bold text-sm mb-4 tracking-wide"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Kontakt
              </h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="tel:030301300"
                    className="text-white/40 hover:text-white/70 text-sm transition-colors"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    030 301 300
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@spletnost.si"
                    className="text-white/40 hover:text-white/70 text-sm transition-colors"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    info@spletnost.si
                  </a>
                </li>
                <li>
                  <a
                    href="https://spletnost.si"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white/70 text-sm transition-colors"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    spletnost.si
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <p
              className="text-white/25 text-xs"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              © 2025 Spletnost. Vse pravice pridržane.
            </p>
            <div className="flex items-center gap-1">
              <span
                className="text-white/25 text-xs"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Zgrajeno z
              </span>
              <span style={{ color: "#F84C00", fontSize: "12px" }}>♥</span>
              <span
                className="text-white/25 text-xs"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                v Sloveniji
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
