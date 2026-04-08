/* ============================================================
   SPLETNOST AI – CTA Banner
   Design: Full-width nebula gradient banner, bold CTA
   ============================================================ */

import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(248,76,0,0.15) 0%, rgba(74,0,235,0.2) 50%, rgba(248,76,0,0.1) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "#080B1A", opacity: 0.6 }}
      />
      {/* Glow orbs */}
      <div
        className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(248,76,0,0.2) 0%, transparent 70%)" }}
      />
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,0,235,0.2) 0%, transparent 70%)" }}
      />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <Rocket size={22} style={{ color: "#F84C00" }} />
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "#F84C00", fontFamily: "'Montserrat', sans-serif" }}
            >
              Začnite danes
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Vaša konkurenca že{" "}
            <span className="gradient-text">avtomatizira.</span>
            <br />
            Ali boste vi?
          </h2>
          <p
            className="text-white/55 text-lg mb-8 max-w-xl mx-auto"
            style={{ fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Vsak dan brez avtomatizacije je izgubljen čas in denar. Dogovorite se za brezplačen posvet in odkrijte, koliko časa lahko prihranite.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#kontakt"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Brezplačen posvet
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:030301300"
              className="btn-outline-orange inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              030 301 300
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
