import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImg from '../assets/images/hero.png';
import FeaturedProduct from '../components/FeaturedProduct';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
      <section className="hero" id="home">
        {/* Cinematic Background Image */}
        <img src={heroImg} alt="Fresh Foodstuff Market" className="hero-bg" />
        <div className="hero-overlay"></div>

        <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={itemVariants} className="hero-badge-pill">🌾 Farm Fresh · Straight to Your Door</motion.div>
            <motion.h1 variants={itemVariants} className="hero-title">
                Your Favourite<br />
                <span className="hero-accent">Foodstuff.</span><br />
                Always Fresh.
            </motion.h1>
            <motion.p variants={itemVariants} className="hero-sub">Rice, beans, palm oil, spices, grains and more — sourced directly from trusted farmers and delivered fresh across Nigeria.</motion.p>
            <motion.div variants={itemVariants} className="hero-buttons">
                <Link to="/products" className="btn-primary">Shop Foodstuff</Link>
                <Link to="/categories" className="btn-secondary">Browse Categories</Link>
            </motion.div>
        </motion.div>
      </section>

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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.div variants={itemVariants} className="feature-card">
                <div className="feature-icon">🌾</div>
                <h3>Direct from Farmers</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1rem' }}>We source all our foodstuff directly from vetted local farmers — no middlemen, no compromise on freshness.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="feature-card">
                <div className="feature-icon">✅</div>
                <h3>Quality Checked</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1rem' }}>Every product is inspected before packing — stone-free, pest-free, and stored in hygienic conditions.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="feature-card">
                <div className="feature-icon">⚖️</div>
                <h3>Accurate Measurements</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1rem' }}>You get exactly what you pay for. Every kilogram, every litre — measured and sealed before delivery.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="feature-card">
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
