import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import riceImg from '../assets/images/rice.png';
import palmOilImg from '../assets/images/palmoil.png';
import heroImg from '../assets/images/hero.png';

const heroProducts = [
  { id: 1, name: 'Premium Parboiled Rice', weight: '10kg', price: 8500,  badge: '🔥 Best Seller', img: riceImg,    desc: 'Stone-free, smooth texture' },
  { id: 2, name: 'Fresh Red Palm Oil',     weight: '5L',   price: 12500, badge: '⭐ Top Pick',   img: palmOilImg, desc: 'Unrefined, direct from mill' },
  { id: 3, name: 'Oloyin Honey Beans',     weight: '5kg',  price: 6200,  badge: '🌿 Trending',   img: heroImg,    desc: 'Sweet & hand-sorted' },
  { id: 4, name: 'Ofada Rice',             weight: '5kg',  price: 5200,  badge: '🏡 Local Fave', img: riceImg,    desc: 'Authentic village rice' },
  { id: 5, name: 'Groundnut Oil',          weight: '5L',   price: 14000, badge: '✨ Premium',    img: palmOilImg, desc: 'Pure, light & flavourful' },
  { id: 6, name: 'Brown Beans',            weight: '10kg', price: 11000, badge: '💪 Protein',    img: heroImg,    desc: 'Nutritious & filling' },
  { id: 7, name: 'Long Grain Rice',        weight: '10kg', price: 9000,  badge: '🌟 Quality',    img: riceImg,    desc: 'Non-sticky, fluffy grains' },
  { id: 8, name: 'Palm Kernel Oil',        weight: '5L',   price: 11000, badge: '🌴 Natural',    img: palmOilImg, desc: 'Traditional cooking oil' },
];

function HeroProductCard({ product, index }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <motion.div
      className="hero-prod-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <span className="hero-prod-badge">{product.badge}</span>
      <div className="hero-prod-img-box">
        <img src={product.img} alt={product.name} className="hero-prod-img" />
      </div>
      <div className="hero-prod-info">
        <h4 className="hero-prod-name">{product.name}</h4>
        <p className="hero-prod-desc">{product.desc}</p>
        <div className="hero-prod-meta">
          <span className="hero-prod-weight">{product.weight}</span>
          <span className="hero-prod-price">₦{product.price.toLocaleString()}</span>
        </div>
        <div className="hero-prod-actions">
          <Link to="/products" className="hero-prod-btn-secondary">Details</Link>
          <button
            className={`hero-prod-btn-primary ${added ? 'added' : ''}`}
            onClick={handleAdd}
          >
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function HeroProducts() {
  return (
    <section className="hero-products-section" id="home">
      {/* Background */}
      <div className="hero-products-bg"></div>

      {/* Top Content */}
      <div className="hero-products-top">
        <motion.div
          className="hero-products-brand"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero-pill">🌾 Fresh Foodstuff · Nationwide Delivery</span>
          <h1 className="hero-products-title">
            Nigeria's <span className="text-orange">Freshest</span><br />
            Foodstuff Store
          </h1>
          <p className="hero-products-sub">
            Premium rice, beans, palm oil, spices & more — sourced direct from farmers and delivered to your door.
          </p>
          <div className="hero-products-ctas">
            <Link to="/products" className="btn-primary">Shop All Products</Link>
            <Link to="/deals" className="btn-secondary">View Today's Deals 🔥</Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-products-stats"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="mini-stat"><strong>200+</strong><span>Products</span></div>
          <div className="mini-stat"><strong>15k+</strong><span>Customers</span></div>
          <div className="mini-stat"><strong>4.8★</strong><span>Rating</span></div>
          <div className="mini-stat"><strong>36+</strong><span>States</span></div>
        </motion.div>
      </div>

      {/* Scrollable Products Row */}
      <div className="hero-products-label">
        <span>— Trending Products —</span>
        <Link to="/products" className="hero-view-all">View all products →</Link>
      </div>
      <div className="hero-products-scroll">
        {heroProducts.map((p, i) => (
          <HeroProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}

export { HeroProducts };
export default HeroProducts;
