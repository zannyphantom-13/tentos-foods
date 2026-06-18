import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.png';
import hero3 from '../assets/images/hero3.png';
import hero4 from '../assets/images/hero4.png';
import HeroProducts from '../components/HeroProducts';
import FeaturedProduct from '../components/FeaturedProduct';

const heroSlides = [
  {
    id: 1,
    img: hero1,
    badge: '🌾 Farm Fresh · Straight to Your Door',
    tag: 'Slide 1 of 4',
    title: 'Your Favourite',
    accent: 'Foodstuff,',
    sub: 'Always Fresh.',
    desc: 'Rice, beans, palm oil, spices, grains and more — sourced directly from trusted Nigerian farmers and delivered nationwide.',
    btnPrimary:   { text: 'Shop Now',          to: '/products'   },
    btnSecondary: { text: 'Browse Categories', to: '/categories' },
  },
  {
    id: 2,
    img: hero2,
    badge: '🍯 Premium Oils · Unrefined Quality',
    tag: 'Slide 2 of 4',
    title: 'Rich Red',
    accent: 'Palm Oil,',
    sub: 'Straight from the Mill.',
    desc: 'Pure, unrefined red palm oil sourced from the best local mills in Nigeria — rich colour, full flavour, perfect for every soup.',
    btnPrimary:   { text: 'Buy Palm Oil', to: '/products' },
    btnSecondary: { text: 'View Deals',   to: '/deals'   },
  },
  {
    id: 3,
    img: hero3,
    badge: '🏪 Trusted by 15,000+ Customers',
    tag: 'Slide 3 of 4',
    title: 'Market Fresh',
    accent: 'Every Day,',
    sub: 'Every Home.',
    desc: 'Experience the bustle and variety of a Nigerian market — online. Every stall\'s best produce, curated and delivered to you.',
    btnPrimary:   { text: 'Explore Products', to: '/products'   },
    btnSecondary: { text: 'Our Story',        to: '/contact'    },
  },
  {
    id: 4,
    img: hero4,
    badge: '📦 Wholesale & Bulk Orders Available',
    tag: 'Slide 4 of 4',
    title: 'Bulk Ordering',
    accent: 'Made Easy,',
    sub: 'Save More.',
    desc: 'Buying for your restaurant, event, or household stock? Get massive discounts on 50kg bags of rice, beans, palm oil and more.',
    btnPrimary:   { text: 'Shop Wholesale', to: '/products' },
    btnSecondary: { text: 'Contact Us',     to: '/contact'  },
  },
];

/* ── slide animation variants ── */
const imgVariants = {
  initial: { opacity: 0, scale: 1.06 },
  animate: { opacity: 1, scale: 1,   transition: { duration: 1.4, ease: 'easeOut' } },
  exit:    { opacity: 0,             transition: { duration: 0.8 } },
};

const txtVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.3, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -30, transition: { duration: 0.5 } },
};

/* ══════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════ */
function Home() {
  const [current, setCurrent] = useState(0);
  const total = heroSlides.length;

  /* auto-advance every 6 s */
  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % total), 6000);
    return () => clearInterval(t);
  }, [total]);

  const slide = heroSlides[current];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ══ FULL-SCREEN CAROUSEL HERO ══ */}
      <section className="hero-carousel" id="home" aria-label="Hero banner">

        {/* Background image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.id}
            src={slide.img}
            alt={slide.accent}
            className="hero-carousel-bg"
            variants={imgVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>

        {/* Dark gradient overlay */}
        <div className="hero-carousel-overlay" />

        {/* Text content */}
        <div className="hero-carousel-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="hero-carousel-inner"
              variants={txtVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="hero-pill">{slide.badge}</div>

              <h1 className="hero-carousel-title">
                {slide.title}<br />
                <span className="text-orange">{slide.accent}</span><br />
                {slide.sub}
              </h1>

              <p className="hero-carousel-desc">{slide.desc}</p>

              <div className="hero-carousel-btns">
                <Link to={slide.btnPrimary.to} className="btn-primary hc-btn">
                  {slide.btnPrimary.text}
                </Link>
                <Link to={slide.btnSecondary.to} className="btn-secondary hc-btn">
                  {slide.btnSecondary.text}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev / Next arrows */}
        <button
          className="hc-arrow hc-arrow-left"
          onClick={() => setCurrent(p => (p - 1 + total) % total)}
          aria-label="Previous slide"
        >‹</button>
        <button
          className="hc-arrow hc-arrow-right"
          onClick={() => setCurrent(p => (p + 1) % total)}
          aria-label="Next slide"
        >›</button>

        {/* Dot indicators */}
        <div className="hc-dots" aria-label="Slide indicators">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`hc-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="hc-counter">{String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>
      </section>

      {/* ══ TRENDING PRODUCTS STRIP ══ */}
      <HeroProducts />

      {/* ══ DEAL OF THE DAY + CATEGORY ROWS ══ */}
      <FeaturedProduct />

      {/* ══ WHY CHOOSE US ══ */}
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

        <div className="features-grid">
          {[
            { icon: '🌾', title: 'Direct from Farmers',    desc: 'No middlemen — we source directly from vetted local farmers for maximum freshness.' },
            { icon: '✅', title: 'Quality Checked',        desc: 'Stone-free, pest-free, and hygienically stored. Every product passes our strict QC.' },
            { icon: '⚖️', title: 'Accurate Measurements', desc: 'Every kilogram and litre is measured precisely before sealing and dispatch.' },
            { icon: '🚚', title: 'Nationwide Delivery',   desc: 'We deliver to all 36 states. The more you buy, the more you save on delivery.' },
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
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
