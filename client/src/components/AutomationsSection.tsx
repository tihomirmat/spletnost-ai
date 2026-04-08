/* ============================================================
   SPLETNOST AI – 5 Key Automations Section
   Design: Dark section, numbered glassmorphism cards,
   orange-to-purple gradient accents, staggered animations
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  Mail,
  FileText,
  Users,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const automations = [
  {
    number: "01",
    icon: MessageSquare,
    title: "AI Asistent za stranke",
    subtitle: "Chatbot & podpora 24/7",
    description:
      "Inteligentni AI chatbot, ki odgovarja na vprašanja strank, rešuje težave in usmerja potencialne kupce — brez čakanja, brez zamud. Deluje 24 ur na dan, 7 dni v tednu.",
    benefits: ["Takojšnji odgovori", "Večjezična podpora", "Integracija na spletno stran"],
    color: "#F84C00",
  },
  {
    number: "02",
    icon: Mail,
    title: "Avtomatizacija e-pošte",
    subtitle: "Pametne e-mail kampanje",
    description:
      "AI, ki piše, pošilja in optimizira e-poštne kampanje. Personalizirani follow-upi, opomniki za stranke in avtomatski odgovori — vse brez ročnega dela.",
    benefits: ["Personalizirani e-maili", "Avtomatski follow-upi", "A/B testiranje"],
    color: "#7B2FFF",
  },
  {
    number: "03",
    icon: FileText,
    title: "Generiranje vsebine z AI",
    subtitle: "Besedila, opisi, objave",
    description:
      "AI, ki piše opise produktov, objave za spletno stran, blog članke in marketinška besedila v vašem slogu. Prihranite ure pisanja vsak teden.",
    benefits: ["SEO optimizirana besedila", "Vaš ton in slog", "Večkratna uporaba"],
    color: "#F84C00",
  },
  {
    number: "04",
    icon: Users,
    title: "Avtomatizacija prodajnega lijaka",
    subtitle: "Lead nurturing & konverzije",
    description:
      "Samodejno sledenje potencialnim strankam, pošiljanje ponudb ob pravem trenutku in opomniki za prodajno ekipo. AI, ki nikoli ne pozabi na lead.",
    benefits: ["Avtomatski follow-upi", "Pametno razvrščanje leadov", "CRM integracija"],
    color: "#7B2FFF",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Poročila in analitika z AI",
    subtitle: "Pametni vpogledi v poslovanje",
    description:
      "Avtomatska tedenska in mesečna poročila o poslovanju, prodaji in marketingu. AI analizira podatke in vam pove, kaj deluje in kaj ne — brez ur v Excelu.",
    benefits: ["Avtomatska poročila", "Napovedi prodaje", "Vizualni dashboardi"],
    color: "#F84C00",
  },
];

function AutomationCard({
  automation,
  index,
}: {
  automation: (typeof automations)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="glass-card-hover rounded-2xl p-7 relative overflow-hidden group"
    >
      {/* Background number */}
      <div
        className="absolute top-4 right-6 font-black text-7xl leading-none select-none pointer-events-none"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          color: automation.color,
          opacity: 0.06,
        }}
      >
        {automation.number}
      </div>

      {/* Top row */}
      <div className="flex items-start gap-4 mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${automation.color}20` }}
        >
          <automation.icon size={22} style={{ color: automation.color }} />
        </div>
        <div>
          <div
            className="text-xs font-bold tracking-widest uppercase mb-1"
            style={{ color: automation.color, fontFamily: "'Montserrat', sans-serif" }}
          >
            {automation.subtitle}
          </div>
          <h3
            className="text-xl font-black text-white leading-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {automation.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p
        className="text-white/60 text-sm leading-relaxed mb-5"
        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
      >
        {automation.description}
      </p>

      {/* Benefits */}
      <div className="flex flex-wrap gap-2 mb-5">
        {automation.benefits.map((b, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full font-semibold"
            style={{
              background: `${automation.color}15`,
              color: automation.color,
              border: `1px solid ${automation.color}30`,
              fontFamily: "'Source Sans 3', sans-serif",
            }}
          >
            {b}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#kontakt"
        className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 group-hover:gap-2.5"
        style={{ color: automation.color, fontFamily: "'Montserrat', sans-serif" }}
      >
        Izvedi več
        <ArrowRight size={14} />
      </a>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${automation.color}, transparent)` }}
      />
    </motion.div>
  );
}

export default function AutomationsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section
      id="avtomatizacije"
      className="py-24 lg:py-32"
      style={{ background: "#080B1A" }}
    >
      <div className="container">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
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
              5 Ključnih Avtomatizacij
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Avtomatizacije, ki jih{" "}
            <span className="gradient-text">vsak podjetnik</span>
            <br className="hidden sm:block" />{" "}
            mora imeti
          </h2>
          <p
            className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Preizkušene AI rešitve, ki podjetjem prihranijo čas, zmanjšajo stroške in povečajo prihodke. Implementacija v 2–5 delovnih dneh.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automations.slice(0, 3).map((a, i) => (
            <AutomationCard key={i} automation={a} index={i} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {automations.slice(3).map((a, i) => (
            <AutomationCard key={i + 3} automation={a} index={i + 3} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="#kontakt"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Začnite z avtomatizacijo danes
            <ArrowRight size={18} />
          </a>
          <p className="text-white/35 text-sm mt-3" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
            Brezplačen posvet • Brez obveznosti • Implementacija v 5 dneh
          </p>
        </motion.div>
      </div>
    </section>
  );
}
