import { useState } from 'react';
import { motion } from 'framer-motion';

function Deals() {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText('TENTOS20').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5 }}
    >
      <section className="promo-section" id="deals" style={{ paddingTop: '8rem', maxWidth: '1400px', margin: '0 auto' }}>
          <motion.div 
            className="promo-inner"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              background: 'linear-gradient(135deg, var(--green-dark) 0%, #111 100%)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-heavy)'
            }}
          >
              <div className="promo-left">
                  <p className="promo-eyebrow">Limited Time Offer 🎉</p>
                  <h2 className="promo-title">First Order? Get <span>20% Off!</span></h2>
                  <p className="promo-sub">Use the code below at checkout. Stock your kitchen with quality Nigerian foodstuff at a special price — one time only.</p>
                  <div className="promo-code-box">
                      <span className="promo-code" id="promo-code">TENTOS20</span>
                      <button className="btn-primary" onClick={copyCode} style={{ padding: '0.8rem 1.5rem', fontSize: '1rem' }}>
                        {copied ? '✓ Copied!' : 'Copy Code'}
                      </button>
                  </div>
              </div>
              <div className="promo-right">
                  <div className="promo-food-stack" style={{ fontSize: '4rem' }}>
                      <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>🌾</motion.span>
                      <motion.span animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.2 }}>🫘</motion.span>
                      <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2.2, delay: 0.4 }}>🫙</motion.span>
                      <motion.span animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 2.8, delay: 0.1 }}>🌶️</motion.span>
                  </div>
              </div>
          </motion.div>
      </section>

      <section className="section" id="reviews">
        <div className="section-head">
            <p className="section-eyebrow">Customer Love ❤️</p>
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-sub">Real feedback from real households and businesses across Nigeria.</p>
        </div>
        <div className="features-grid">
            <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
                <div style={{ color: 'var(--orange)', fontSize: '1.5rem', marginBottom: '1rem' }}>★★★★★</div>
                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1.5rem' }}>"The palm oil was so fresh and pure — you can tell it's straight from the mill. No more buying substandard oil from the market. I now order every month!"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg,#ff6a00,#ee0979)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>N</div>
                    <div style={{ textAlign: 'left' }}>
                        <strong style={{ display: 'block' }}>Ngozi Eze</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Enugu, Nigeria</span>
                    </div>
                </div>
            </motion.div>

            <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
                <div style={{ color: 'var(--orange)', fontSize: '1.5rem', marginBottom: '1rem' }}>★★★★★</div>
                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1.5rem' }}>"Bought 50kg of local rice and it was stone-free and properly parboiled. My whole family noticed the difference. Tentos Foods is 100% reliable!"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg,#3a8c1c,#52b788)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>T</div>
                    <div style={{ textAlign: 'left' }}>
                        <strong style={{ display: 'block' }}>Taiwo Afolabi</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ibadan, Nigeria</span>
                    </div>
                </div>
            </motion.div>

            <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
                <div style={{ color: 'var(--orange)', fontSize: '1.5rem', marginBottom: '1rem' }}>★★★★★</div>
                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1.5rem' }}>"I run a restaurant and I order my crayfish and spices from Tentos every week. The quality is always consistent. My customers can always taste the difference!"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg,#f4a261,#e07a2f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>A</div>
                    <div style={{ textAlign: 'left' }}>
                        <strong style={{ display: 'block' }}>Aisha Mohammed</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Abuja, Nigeria</span>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Deals;
