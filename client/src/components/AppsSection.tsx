/* ============================================================
   SPLETNOST AI – Custom Applications Section
   Design: Alternating layout with app screenshots,
   feature lists, glassmorphism, nebula gradient accents
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const CRM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475639595/23zSpdwXTFDw8CXcrctubE/crm-app-preview-YSa9EEQKr8Wt6BFwDVzKv7.webp";
const WAREHOUSE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475639595/23zSpdwXTFDw8CXcrctubE/warehouse-app-preview-3cFK8vZhXJ3o45U4ja442M.webp";
const SOCIAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475639595/23zSpdwXTFDw8CXcrctubE/social-media-app-preview-8wjH9ADpZHsKroNym8mSHe.webp";

const apps = [
  {
    tag: "Custom CRM",
    title: "CRM sistem za vaše podjetje",
    description:
      "Pozabite na generične CRM sisteme, ki ne ustrezajo vašim potrebam. Spletnost razvije CRM aplikacijo, ki je zgrajena točno za vaše prodajne procese, vaše stranke in vaš tim.",
    features: [
      "Sledenje strankam in priložnostim",
      "Avtomatski opomniki in follow-upi",
      "Pipeline management po meri",
      "Integracija z e-pošto in telefonom",
      "Poročila in analitika prodaje",
      "Mobilna aplikacija za prodajnike",
    ],
    image: CRM_IMG,
    color: "#F84C00",
    reverse: false,
  },
  {
    tag: "Skladiščni sistem",
    title: "Pametno upravljanje skladišča",
    description:
      "AI-podprta aplikacija za upravljanje zalog, ki vam v realnem času pove, kaj imate na zalogi, kdaj naročiti in kje so ozka grla v vašem skladišču.",
    features: [
      "Sledenje zalogam v realnem času",
      "Avtomatska naročila pri dobaviteljih",
      "Skeniranje črtnih kod in QR kod",
      "Napovedi povpraševanja z AI",
      "Integracija z računovodskim sistemom",
      "Poročila o pretoku blaga",
    ],
    image: WAREHOUSE_IMG,
    color: "#7B2FFF",
    reverse: true,
  },
  {
    tag: "Social Media Avtomatizacija",
    title: "Objavljajte na vseh kanalih z AI",
    description:
      "Aplikacija, ki z AI ustvarja, načrtuje in objavlja vsebino na vseh vaših socialnih omrežjih. Enkrat tedensko pregledajte in potrdite — AI naredi ostalo.",
    features: [
      "AI generiranje objav in slik",
      "Urnik objav za vse platforme",
      "Instagram, Facebook, LinkedIn, TikTok",
      "Analitika dosega in angažiranosti",
      "Hashtag optimizacija z AI",
      "Odzivanje na komentarje z AI",
    ],
    image: SOCIAL_IMG,
    color: "#F84C00",
    reverse: false,
  },
];

function AppCard({ app, index }: { app: (typeof apps)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        app.reverse ? "lg:grid-flow-col-dense" : ""
      }`}
    >
      {/* Text side */}
      <div className={app.reverse ? "lg:col-start-2" : ""}>
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
          style={{
            background: `${app.color}15`,
            border: `1px solid ${app.color}30`,
          }}
        >
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: app.color, fontFamily: "'Montserrat', sans-serif" }}
          >
            {app.tag}
          </span>
        </div>

        <h3
          className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {app.title}
        </h3>

        <p
          className="text-white/60 text-base leading-relaxed mb-7"
          style={{ fontFamily: "'Source Sans 3', sans-serif" }}
        >
          {app.description}
        </p>

        <ul className="space-y-3 mb-8">
          {app.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircle2 size={16} style={{ color: app.color, flexShrink: 0 }} />
              <span
                className="text-white/75 text-sm"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:gap-3"
          style={{
            background: `${app.color}20`,
            color: app.color,
            border: `1px solid ${app.color}35`,
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Povpraševanje za {app.tag}
          <ArrowRight size={15} />
        </a>
      </div>

      {/* Image side */}
      <div className={app.reverse ? "lg:col-start-1" : ""}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            boxShadow: `0 0 60px ${app.color}25, 0 20px 60px rgba(0,0,0,0.5)`,
          }}
        >
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-auto rounded-2xl"
          />
          {/* Subtle overlay */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${app.color}08 0%, transparent 60%)`,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function AppsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section
      id="aplikacije"
      className="py-24 lg:py-32 relative"
      style={{ background: "#0D1230" }}
    >
      {/* Top gradient separator */}
      <div
        className="absolute left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(248,76,0,0.3), rgba(74,0,235,0.3), transparent)" }}
      />

      <div className="container">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{
              background: "rgba(74, 0, 235, 0.12)",
              border: "1px solid rgba(74, 0, 235, 0.3)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#4A00EB", boxShadow: "0 0 8px rgba(74,0,235,0.8)" }}
            />
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "#9B6BFF", fontFamily: "'Montserrat', sans-serif" }}
            >
              Custom Aplikacije
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-black text-white mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Aplikacije, zgrajene{" "}
            <span className="gradient-text">točno za vas</span>
          </h2>
          <p
            className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Vsako podjetje je edinstveno. Zato razvijamo custom aplikacije, ki se popolnoma prilagodijo vašim procesom, ekipi in ciljem.
          </p>
        </motion.div>

        {/* App cards */}
        <div className="space-y-24 lg:space-y-32">
          {apps.map((app, i) => (
            <AppCard key={i} app={app} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
