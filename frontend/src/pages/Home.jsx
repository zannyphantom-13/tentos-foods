import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImg from '../assets/images/hero.png';
import riceImg from '../assets/images/rice.png';
import palmOilImg from '../assets/images/palmoil.png';
import FeaturedProduct from '../components/FeaturedProduct';

const heroSlides = [
  {
    id: 1,
    img: heroImg,
    badge: "🌾 Farm Fresh · Straight to Your Door",
    title: "Your Favourite",
    accent: "Foodstuff.",
    sub: "Always Fresh.",
    desc: "Rice, beans, palm oil, spices, grains and more — sourced directly from trusted farmers and delivered fresh across Nigeria.",
    btnPrimary: { text: "Shop Foodstuff", link: "/products" },
    btnSecondary: { text: "Browse Categories", link: "/categories" }
  },
  {
    id: 2,
    img: palmOilImg,
    badge: "🍯 Premium Oils",
    title: "Rich Red",
    accent: "Palm Oil.",
    sub: "Unrefined Quality.",
    desc: "Sourced directly from the best mills. Perfect consistency, rich colour, and unforgettable flavour for your soups.",
    btnPrimary: { text: "Buy Palm Oil", link: "/products" },
    btnSecondary: { text: "View Deals", link: "/deals" }
  },
  {
    id: 3,
    img: riceImg,
    badge: "📦 Wholesale Available",
    title: "Bulk Ordering",
    accent: "Made Easy.",
    sub: "Save More.",
    desc: "Buying for a party, restaurant, or stocking up? Get massive discounts on 50kg bags of rice, beans, and more.",
    btnPrimary: { text: "Shop Wholesale", link: "/products" },
    btnSecondary: { text: "Contact Us", link: "/contact" }
  }
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1.2 } },
    exit: { opacity: 0, transition: { duration: 1 } }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
      {/* ── CAROUSEL HERO SECTION ── */}
      <section className="hero carousel-hero" id="home">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentSlide}
            src={heroSlides[currentSlide].img} 
            alt="Hero Background" 
            className="hero-bg" 
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>
        
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <AnimatePresence mode="wait">
            <motion.div 
                key={currentSlide}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <div className="hero-badge-pill">{heroSlides[currentSlide].badge}</div>
                <h1 className="hero-title">
                    {heroSlides[currentSlide].title}<br />
                    <span className="hero-accent">{heroSlides[currentSlide].accent}</span><br />
                    {heroSlides[currentSlide].sub}
                </h1>
                <p className="hero-sub">{heroSlides[currentSlide].desc}</p>
                <div className="hero-buttons">
                    <Link to={heroSlides[currentSlide].btnPrimary.link} className="btn-primary">
                        {heroSlides[currentSlide].btnPrimary.text}
                    </Link>
                    <Link to={heroSlides[currentSlide].btnSecondary.link} className="btn-secondary">
                        {heroSlides[currentSlide].btnSecondary.text}
                    </Link>
                </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
            {heroSlides.map((_, idx) => (
                <button 
                    key={idx} 
                    className={`indicator-dot ${currentSlide === idx ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                ></button>
            ))}
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <motion.div 
        className="stats-strip"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="stat-item">
            <span className="stat-num">200<span>+</span></span>
            <span className="stat-label">Foodstuff Items</span>
        </div>
        <div className="stat-item">
            <span className="stat-num">15k<span>+</span></span>
            <span className="stat-label">Happy Customers</span>
        </div>
        <div className="stat-item">
            <span className="stat-num">36<span>+</span></span>
            <span className="stat-label">States Covered</span>
        </div>
        <div className="stat-item">
            <span className="stat-num">4.8<span>⭐</span></span>
            <span className="stat-label">Customer Rating</span>
        </div>
      </motion.div>

      <FeaturedProduct />

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
            <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="feature-icon">🌾</div>
                <h3>Direct from Farmers</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1rem' }}>We source all our foodstuff directly from vetted local farmers — no middlemen, no compromise on freshness.</p>
            </motion.div>
            <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="feature-icon">✅</div>
                <h3>Quality Checked</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1rem' }}>Every product is inspected before packing — stone-free, pest-free, and stored in hygienic conditions.</p>
            </motion.div>
            <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="feature-icon">⚖️</div>
                <h3>Accurate Measurements</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1rem' }}>You get exactly what you pay for. Every kilogram, every litre — measured and sealed before delivery.</p>
            </motion.div>
            <motion.div className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className="feature-icon">🚚</div>
                <h3>Nationwide Delivery</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1rem' }}>We deliver across all 36 states in Nigeria. Bulk orders welcome — the more you buy, the more you save.</p>
            </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Home;
