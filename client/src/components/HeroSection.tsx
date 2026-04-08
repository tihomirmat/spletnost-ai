/* ============================================================
   SPLETNOST AI – Hero Section
   Design: Full-screen dark nebula bg, large Montserrat heading,
   gradient text, glassmorphism stat cards, orange CTA
   ============================================================ */

import { motion } from "framer-motion";
import { ArrowRight, Zap, Clock, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475639595/23zSpdwXTFDw8CXcrctubE/hero-nebula-bg-W3Vd4VgUKaYqktW2u5wSyP.webp";
const AUTOMATION_VISUAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475639595/23zSpdwXTFDw8CXcrctubE/hero-robot-real-office_c39437d7.webp";

const stats = [
  { icon: Clock, value: "80%", label: "Manj ročnega dela" },
  { icon: Zap, value: "3×", label: "Hitrejše procese" },
  { icon: TrendingUp, value: "40%", label: "Višja produktivnost" },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: { x: number; y: number; r: number; alpha: number; speed: number }[] = [];
    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.003 + 0.001,
      });
    }

    let animId: number;
    let t = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.01;
      stars.forEach((star) => {
        const pulse = Math.sin(t * star.speed * 100) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * pulse})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#080B1A" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          opacity: 0.45,
        }}
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(8,11,26,0.85) 0%, rgba(8,11,26,0.5) 50%, rgba(8,11,26,0.75) 100%)",
        }}
      />

      {/* Star canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(248, 76, 0, 0.12)",
                border: "1px solid rgba(248, 76, 0, 0.3)",
              }}
            >
              <span className="orange-dot" />
              <span
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: "#F84C00", fontFamily: "'Montserrat', sans-serif" }}
              >
                AI Avtomatizacija
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="text-white">Avtomatizirajte</span>
              <br />
              <span className="gradient-text">vaše podjetje</span>
              <br />
              <span className="text-white">z močjo AI.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg lg:text-xl text-white/65 leading-relaxed mb-8 max-w-xl"
              style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 400 }}
            >
              Spletnost vam ponuja 5 ključnih AI avtomatizacij, ki jih vsak podjetnik mora imeti — plus custom aplikacije, ki so zgrajene točno za vaše podjetje.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#kontakt"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Začnite brezplačno
                <ArrowRight size={18} />
              </a>
              <a
                href="#avtomatizacije"
                className="btn-outline-orange inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Oglejte si storitve
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card flex items-center gap-3 px-4 py-3 rounded-xl"
                >
                  <stat.icon size={18} style={{ color: "#F84C00" }} />
                  <div>
                    <div
                      className="text-xl font-black text-white leading-none"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/50 mt-0.5" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 0 80px rgba(248, 76, 0, 0.2), 0 0 120px rgba(74, 0, 235, 0.15)",
              }}
            >
              <img
                src={AUTOMATION_VISUAL}
                alt="AI Avtomatizacija vizualizacija"
                className="w-full h-auto rounded-2xl"
              />
              {/* Overlay gradient on image */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(248,76,0,0.1) 0%, transparent 50%, rgba(74,0,235,0.15) 100%)",
                }}
              />
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-8 glass-card px-5 py-4 rounded-xl"
              style={{ border: "1px solid rgba(248, 76, 0, 0.25)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(248, 76, 0, 0.2)" }}
                >
                  <Zap size={20} style={{ color: "#F84C00" }} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Avtomatizacija aktivna
                  </div>
                  <div className="text-white/50 text-xs">24/7 deluje za vas</div>
                </div>
              </div>
            </motion.div>

            {/* Floating accent card 2 */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-4 glass-card px-4 py-3 rounded-xl"
              style={{ border: "1px solid rgba(74, 0, 235, 0.3)" }}
            >
              <div className="text-white font-black text-2xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                +127%
              </div>
              <div className="text-white/50 text-xs">Rast učinkovitosti</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #080B1A)",
        }}
      />
    </section>
  );
}
