import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'grains',
    title: 'Rice & Grains',
    sub: 'Local, foreign & parboiled rice',
    count: '24 products',
    gradient: 'linear-gradient(135deg, #b8860b 0%, #ffd700 100%)',
    accent: '#ffd700',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="32" cy="40" rx="18" ry="10" fill="rgba(255,215,0,0.15)" stroke="rgba(255,215,0,0.4)" strokeWidth="1.5"/>
        <ellipse cx="32" cy="16" rx="6" ry="14" rx="6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="20" cy="20" rx="5" ry="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" transform="rotate(-20 20 20)"/>
        <ellipse cx="44" cy="20" rx="5" ry="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" transform="rotate(20 44 20)"/>
        <line x1="32" y1="30" x2="32" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="20" y1="33" x2="20" y2="50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="44" y1="33" x2="44" y2="50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="32" cy="10" r="3" fill="currentColor"/>
        <circle cx="20" cy="13" r="2.5" fill="currentColor" opacity="0.8"/>
        <circle cx="44" cy="13" r="2.5" fill="currentColor" opacity="0.8"/>
        <path d="M14 50 Q32 56 50 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    id: 'beans',
    title: 'Beans & Legumes',
    sub: 'Oloyin, brown, black-eyed & more',
    count: '18 products',
    gradient: 'linear-gradient(135deg, #5c3317 0%, #c0714f 100%)',
    accent: '#c0714f',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="22" cy="26" rx="10" ry="14" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M18 20 Q22 26 18 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
        <ellipse cx="42" cy="26" rx="10" ry="14" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M38 20 Q42 26 38 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
        <ellipse cx="32" cy="44" rx="9" ry="12" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M28 39 Q32 44 28 49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
        <circle cx="22" cy="26" r="2" fill="currentColor" opacity="0.3"/>
        <circle cx="42" cy="26" r="2" fill="currentColor" opacity="0.3"/>
        <circle cx="32" cy="44" r="2" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
  },
  {
    id: 'oils',
    title: 'Cooking Oils',
    sub: 'Palm oil, groundnut & soya',
    count: '12 products',
    gradient: 'linear-gradient(135deg, #8B0000 0%, #FF6B00 100%)',
    accent: '#FF6B00',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="20" width="20" height="32" rx="4" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="26" y="14" width="12" height="8" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M29 14 L29 10 Q32 8 35 10 L35 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <rect x="26" y="26" width="12" height="16" rx="2" fill="currentColor" opacity="0.2"/>
        <line x1="26" y1="30" x2="38" y2="30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5"/>
        <line x1="26" y1="34" x2="38" y2="34" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5"/>
        <path d="M40 28 Q46 30 44 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: 'spices',
    title: 'Spices & Seasonings',
    sub: 'Pepper, crayfish, curry & more',
    count: '30 products',
    gradient: 'linear-gradient(135deg, #7b2d00 0%, #e8572a 100%)',
    accent: '#e8572a',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8 C36 14 42 16 44 24 C46 32 40 40 32 42 C24 40 18 32 20 24 C22 16 28 14 32 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M32 8 C30 16 30 24 32 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M24 20 Q32 24 40 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M22 28 Q32 32 42 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <ellipse cx="32" cy="48" rx="8" ry="4" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="42" x2="32" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="38" cy="14" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="28" cy="12" r="1.5" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 'tomatoes',
    title: 'Tomatoes & Peppers',
    sub: 'Fresh, dried & paste varieties',
    count: '15 products',
    gradient: 'linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)',
    accent: '#e74c3c',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="36" r="18" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M32 18 C32 14 28 10 28 10 C34 10 38 14 38 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M32 14 L32 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 10 C24 8 20 10 18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
        <path d="M24 30 Q32 34 40 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M22 38 Q32 42 42 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <circle cx="32" cy="36" r="5" fill="currentColor" opacity="0.1"/>
      </svg>
    ),
  },
  {
    id: 'fish',
    title: 'Fish & Seafood',
    sub: 'Stockfish, crayfish & smoked',
    count: '20 products',
    gradient: 'linear-gradient(135deg, #1a5276 0%, #2e86c1 100%)',
    accent: '#2e86c1',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 32 C18 20 38 16 52 32 C38 48 18 44 10 32Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M10 32 L4 24 L4 40 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="46" cy="28" r="2.5" fill="currentColor"/>
        <path d="M30 26 Q34 32 30 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" fill="none"/>
        <path d="M24 28 Q28 32 24 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" fill="none"/>
        <path d="M36 28 Q40 32 36 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" fill="none"/>
      </svg>
    ),
  },
  {
    id: 'tubers',
    title: 'Tubers & Roots',
    sub: 'Yam, cassava & cocoyam',
    count: '16 products',
    gradient: 'linear-gradient(135deg, #5d4037 0%, #a1887f 100%)',
    accent: '#a1887f',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 40 Q16 28 24 18 Q32 10 40 18 Q48 28 44 40 Q40 52 32 52 Q24 52 20 40Z" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M32 10 L32 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M36 8 C40 4 46 6 46 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M28 8 C24 4 18 6 18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 28 Q32 32 40 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M22 36 Q32 40 42 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: 'flour',
    title: 'Flour & Starch',
    sub: 'Garri, wheat, semolina & eba',
    count: '14 products',
    gradient: 'linear-gradient(135deg, #827717 0%, #cddc39 100%)',
    accent: '#cddc39',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="28" width="36" height="26" rx="4" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M14 36 L50 36" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
        <path d="M20 28 L20 24 Q20 16 32 16 Q44 16 44 24 L44 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M26 16 C26 10 38 10 38 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
        <circle cx="28" cy="42" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="36" cy="42" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="44" cy="42" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="42" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function Categories() {
  return (
    <motion.section
      className="section cat-page"
      id="categories"
      style={{ paddingTop: '8rem' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="section-head">
        <p className="section-eyebrow">Browse by Category</p>
        <h1 className="section-title">What Do You Need Today?</h1>
        <p className="section-sub">
          From whole grains to bottled oils — every staple your kitchen needs, always in stock.
        </p>
      </div>

      <motion.div
        className="cat-page-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ staggerChildren: 0.08 }}
      >
        {categories.map(cat => (
          <motion.div
            key={cat.id}
            className="cat-page-card"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            style={{ '--cat-accent': cat.accent }}
          >
            {/* Icon Box */}
            <div className="cat-page-icon-box" style={{ background: cat.gradient }}>
              <div className="cat-page-icon" style={{ color: '#fff' }}>
                {cat.icon}
              </div>
              <div className="cat-page-icon-glow" style={{ background: cat.accent }} />
            </div>

            {/* Content */}
            <div className="cat-page-body">
              <h3 className="cat-page-title">{cat.title}</h3>
              <p className="cat-page-sub">{cat.sub}</p>
              <div className="cat-page-footer">
                <span className="cat-page-count">{cat.count}</span>
                <span className="cat-page-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="cat-page-hover-line" style={{ background: cat.gradient }} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Categories;
