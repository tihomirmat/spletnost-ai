/* ============================================================
   SPLETNOST AI – Testimonials Section
   Design: Dark bg, glassmorphism quote cards, star ratings,
   horizontal scroll on mobile
   ============================================================ */

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marko Kovač",
    role: "Direktor, Kovač Trade d.o.o.",
    text: "Z AI chatbotom smo zmanjšali čas odgovarjanja strankam z 2 ur na 2 minuti. Stranke so zadovoljnejše, mi pa imamo več časa za prodajo.",
    rating: 5,
    savings: "15 ur/teden",
  },
  {
    name: "Ana Horvat",
    role: "Lastnica, Cvetličarna Ana",
    text: "Social media avtomatizacija je spremenila naše poslovanje. Prej sem porabila 3 ure dnevno za objave, zdaj 20 minut tedensko za pregled.",
    rating: 5,
    savings: "20 ur/teden",
  },
  {
    name: "Tomaž Novak",
    role: "Vodja prodaje, Novak Logistics",
    text: "Custom CRM je bil najboljša investicija letos. Naša prodajna ekipa ima vse informacije na enem mestu in ne zamudi nobenega leada.",
    rating: 5,
    savings: "30% več prodaje",
  },
  {
    name: "Petra Zupan",
    role: "CEO, Zupan Consulting",
    text: "Avtomatizacija e-poštnih kampanj nam je povečala stopnjo odprtih e-mailov za 40%. Spletnost je resnično razumel naše potrebe.",
    rating: 5,
    savings: "40% boljši open rate",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "#080B1A" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl lg:text-4xl font-black text-white mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Kar pravijo naše{" "}
            <span className="gradient-text">stranke</span>
          </h2>
          <p
            className="text-white/45 text-base"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Resnični rezultati, resnična podjetja.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover rounded-2xl p-6 flex flex-col"
            >
              {/* Quote icon */}
              <Quote size={20} style={{ color: "#F84C00", opacity: 0.5, marginBottom: "12px" }} />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} style={{ color: "#F84C00", fill: "#F84C00" }} />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-white/65 text-sm leading-relaxed flex-1 mb-4"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                "{t.text}"
              </p>

              {/* Savings badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-4 self-start"
                style={{
                  background: "rgba(248, 76, 0, 0.12)",
                  border: "1px solid rgba(248, 76, 0, 0.25)",
                }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: "#F84C00", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.savings}
                </span>
              </div>

              {/* Author */}
              <div className="border-t border-white/5 pt-4">
                <div
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.name}
                </div>
                <div
                  className="text-white/40 text-xs mt-0.5"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
