import { motion } from 'framer-motion';
import HeroProducts from '../components/HeroProducts';
import FeaturedProduct from '../components/FeaturedProduct';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── HERO PRODUCTS SECTION ── */}
      <HeroProducts />

      {/* ── DEAL OF THE DAY + CATEGORY SECTIONS ── */}
      <FeaturedProduct />

      {/* ── WHY CHOOSE US ── */}
      <section className="section" id="why">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Why Choose Us</p>
          <h2 className="section-title">The Tentos Difference</h2>
          <p className="section-sub">We're not just selling foodstuff — we're committed to quality, freshness, and trust.</p>
        </motion.div>

        <motion.div
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { icon: '🌾', title: 'Direct from Farmers',     desc: 'We source all our foodstuff directly from vetted local farmers — no middlemen, no compromise on freshness.' },
            { icon: '✅', title: 'Quality Checked',         desc: 'Every product is inspected before packing — stone-free, pest-free, and stored in hygienic conditions.' },
            { icon: '⚖️', title: 'Accurate Measurements',  desc: 'You get exactly what you pay for. Every kilogram, every litre — measured and sealed before delivery.' },
            { icon: '🚚', title: 'Nationwide Delivery',     desc: 'We deliver across all 36 states in Nigeria. Bulk orders welcome — the more you buy, the more you save.' },
          ].map((f, i) => (
            <motion.div
              key={i}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1rem' }}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Home;
