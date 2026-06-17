import { motion } from 'framer-motion';

function Categories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
        className="section" 
        id="categories"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <div className="section-head">
            <p className="section-eyebrow">Browse by Category</p>
            <h2 className="section-title">What Do You Need Today?</h2>
            <p className="section-sub">From whole grains to bottled oils — every staple your kitchen needs, always in stock.</p>
        </div>
        
        {/* We reuse the feature-card styling to give categories a bulky look */}
        <motion.div 
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            <motion.div variants={itemVariants} className="feature-card" style={{ padding: '2rem 1rem' }}>
                <div className="feature-icon" style={{ fontSize: '2.5rem', width: '80px', height: '80px' }}>🌾</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Rice &amp; Grains</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Local, foreign &amp; parboiled</p>
            </motion.div>
            <motion.div variants={itemVariants} className="feature-card" style={{ padding: '2rem 1rem' }}>
                <div className="feature-icon" style={{ fontSize: '2.5rem', width: '80px', height: '80px' }}>🫘</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Beans &amp; Legumes</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Oloyin, brown, black-eyed</p>
            </motion.div>
            <motion.div variants={itemVariants} className="feature-card" style={{ padding: '2rem 1rem' }}>
                <div className="feature-icon" style={{ fontSize: '2.5rem', width: '80px', height: '80px' }}>🫙</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Cooking Oils</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Palm oil, groundnut, soya</p>
            </motion.div>
            <motion.div variants={itemVariants} className="feature-card" style={{ padding: '2rem 1rem' }}>
                <div className="feature-icon" style={{ fontSize: '2.5rem', width: '80px', height: '80px' }}>🌶️</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Spices &amp; Seasonings</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Pepper, crayfish, curry</p>
            </motion.div>
            <motion.div variants={itemVariants} className="feature-card" style={{ padding: '2rem 1rem' }}>
                <div className="feature-icon" style={{ fontSize: '2.5rem', width: '80px', height: '80px' }}>🍅</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Tomatoes &amp; Peppers</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Fresh, dried &amp; paste</p>
            </motion.div>
            <motion.div variants={itemVariants} className="feature-card" style={{ padding: '2rem 1rem' }}>
                <div className="feature-icon" style={{ fontSize: '2.5rem', width: '80px', height: '80px' }}>🐟</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Fish &amp; Seafood</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Stockfish, crayfish, smoked</p>
            </motion.div>
            <motion.div variants={itemVariants} className="feature-card" style={{ padding: '2rem 1rem' }}>
                <div className="feature-icon" style={{ fontSize: '2.5rem', width: '80px', height: '80px' }}>🍠</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Tubers &amp; Roots</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Yam, cassava, cocoyam</p>
            </motion.div>
            <motion.div variants={itemVariants} className="feature-card" style={{ padding: '2rem 1rem' }}>
                <div className="feature-icon" style={{ fontSize: '2.5rem', width: '80px', height: '80px' }}>🌽</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Flour &amp; Starch</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Garri, wheat, semolina, eba</p>
            </motion.div>
        </motion.div>
    </motion.section>
  );
}

export default Categories;
