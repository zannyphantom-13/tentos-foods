import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section 
        className="section" 
        id="contact-page" 
        style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
    >
      <div className="section-head" style={{ margin: '0 auto', maxWidth: '800px', textAlign: 'center' }}>
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">We're Here to Help</h2>
          <p className="section-sub" style={{ marginBottom: '3rem' }}>
            Have a question about a bulk order, delivery locations, or our products? Reach out to us through any of the channels below.
          </p>
          
          <div className="features-grid">
            <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
                <h3 style={{ marginBottom: '0.5rem' }}>Visit Us</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>14 Market Road, Onitsha,<br/>Anambra State, Nigeria</p>
            </motion.div>
            <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📞</div>
                <h3 style={{ marginBottom: '0.5rem' }}>Call Us</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <a href="tel:+2348012345678" style={{ color: 'inherit', textDecoration: 'none' }}>+234 801 234 5678</a>
                </p>
            </motion.div>
            <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>
                <h3 style={{ marginBottom: '0.5rem' }}>Email Us</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <a href="mailto:hello@tentosfoods.com" style={{ color: 'inherit', textDecoration: 'none' }}>hello@tentosfoods.com</a>
                </p>
            </motion.div>
          </div>
      </div>
    </motion.section>
  );
}

export default Contact;
