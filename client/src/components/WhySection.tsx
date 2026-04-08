/* ============================================================
   SPLETNOST AI – Why Spletnost Section
   Design: Dark bg, large stats, process steps, trust signals
   ============================================================ */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Rocket, Shield, Headphones, Code2, Clock, Star } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "Zadovoljnih strank" },
  { value: 200, suffix: "+", label: "Implementiranih avtomatizacij" },
  { value: 5, suffix: " dni", label: "Povprečna implementacija" },
  { value: 98, suffix: "%", label: "Stopnja zadovoljstva" },
];

const reasons = [
  {
    icon: Rocket,
    title: "Hitra implementacija",
    description:
      "Večino avtomatizacij implementiramo v 2–5 delovnih dneh. Brez dolgih projektov, brez čakanja.",
    color: "#F84C00",
  },
  {
    icon: Code2,
    title: "Prilagojeno vašim procesom",
    description:
      "Vsaka rešitev je razvita po meri. Ne prilagajate se vi sistemu — sistem se prilagodi vam.",
    color: "#7B2FFF",
  },
  {
    icon: Shield,
    title: "Varnost in zanesljivost",
    description:
      "Vaši podatki so varni. Vse rešitve gradimo z visokimi standardi varnosti in zanesljivosti.",
    color: "#F84C00",
  },
  {
    icon: Headphones,
    title: "Stalna podpora",
    description:
      "Nismo le razvijalci — smo vaš dolgoročni partner. Podpora, vzdrževanje in nadgradnje vključene.",
    color: "#7B2FFF",
  },
  {
    icon: Clock,
    title: "Prihranek časa",
    description:
      "Naše stranke v povprečju prihranijo 15–30 ur tedensko z avtomatizacijo ponavljajočih se nalog.",
    color: "#F84C00",
  },
  {
    icon: Star,
    title: "Dokazani rezultati",
    description:
      "Vsaka implementacija je podprta z meritvami. Vidite točno, koliko časa in denarja prihranite.",
    color: "#7B2FFF",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Brezplačen posvet",
    desc: "Analiziramo vaše procese in identificiramo priložnosti za avtomatizacijo.",
  },
  {
    num: "02",
    title: "Predlog rešitve",
    desc: "Pripravimo konkreten predlog z oceno prihrankov časa in stroškov.",
  },
  {
    num: "03",
    title: "Implementacija",
    desc: "Razvijemo in implementiramo rešitev v dogovorjenem roku.",
  },
  {
    num: "04",
    title: "Podpora & rast",
    desc: "Stalno optimiziramo in dodajamo nove funkcionalnosti po vaših potrebah.",
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function WhySection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section
      id="zakaj"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#080B1A" }}
    >
      {/* Background nebula glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(74,0,235,0.06) 0%, rgba(248,76,0,0.04) 50%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div
                className="text-4xl lg:text-5xl font-black mb-2 gradient-text"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div
                className="text-white/50 text-sm"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
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
              Zakaj Spletnost
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-black text-white mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Vaš partner za{" "}
            <span className="gradient-text">digitalno prihodnost</span>
          </h2>
          <p
            className="text-white/55 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Spletnost ni le razvojna agencija. Smo strateški partner, ki razume vaše podjetje in gradi rešitve, ki resnično delujejo.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover rounded-2xl p-6"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${reason.color}18` }}
              >
                <reason.icon size={20} style={{ color: reason.color }} />
              </div>
              <h4
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {reason.title}
              </h4>
              <p
                className="text-white/55 text-sm leading-relaxed"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3
            className="text-2xl lg:text-3xl font-black text-white text-center mb-10"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Kako poteka sodelovanje
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-6">
                  <div
                    className="text-5xl font-black mb-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      background: "linear-gradient(135deg, #F84C00, #4A00EB)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      opacity: 0.5,
                    }}
                  >
                    {step.num}
                  </div>
                  <h4
                    className="text-base font-bold text-white mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="text-white/50 text-sm leading-relaxed"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {step.desc}
                  </p>
                </div>
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px"
                    style={{ background: "linear-gradient(90deg, rgba(248,76,0,0.4), rgba(74,0,235,0.4))" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
