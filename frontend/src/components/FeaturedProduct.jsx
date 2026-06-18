import { useState } from 'react';
import { motion } from 'framer-motion';
import riceImg from '../assets/images/rice.png';
import palmOilImg from '../assets/images/palmoil.png';
import heroImg from '../assets/images/hero.png';

/* ─── DATA ──────────────────────────────────────── */

const dealOfTheDay = [
  {
    id: 1,
    tag: "🔥 Best Seller",
    name: "Premium Parboiled Rice",
    img: riceImg,
    rating: 4.9, reviews: 340,
    desc: "Stone-free, perfectly parboiled local rice. Rich aroma, great texture — loved by every Nigerian household.",
    sizes: ['5kg', '10kg', '50kg'],
    prices: { '5kg': 4500, '10kg': 8500, '50kg': 40000 }
  },
  {
    id: 2,
    tag: "⭐ Premium Pick",
    name: "Fresh Red Palm Oil",
    img: palmOilImg,
    rating: 4.8, reviews: 210,
    desc: "Rich, unrefined red palm oil direct from the mill. Full colour, full flavour. Perfect for all Nigerian soups.",
    sizes: ['1L', '5L', '25L'],
    prices: { '1L': 2500, '5L': 12500, '25L': 60000 }
  },
  {
    id: 3,
    tag: "🌿 Trending",
    name: "Oloyin Honey Beans",
    img: heroImg,
    rating: 4.7, reviews: 180,
    desc: "Sweet, hand-sorted oloyin beans sun-dried to perfection. Ideal for ewa agoyin, moin moin, and porridge.",
    sizes: ['5kg', '10kg', '50kg'],
    prices: { '5kg': 6200, '10kg': 12000, '50kg': 58000 }
  }
];

const categories = [
  {
    id: 'grains',
    title: 'Grains & Rice',
    eyebrow: 'Staple Foods',
    icon: '🌾',
    products: [
      { id: 'g1', name: 'Local White Rice', weight: '10kg', price: 8500, badge: 'Best Seller', img: riceImg },
      { id: 'g2', name: 'Parboiled Rice', weight: '50kg', price: 40000, badge: 'Bulk Deal', img: riceImg },
      { id: 'g3', name: 'Ofada Rice', weight: '5kg', price: 5200, badge: 'Local', img: riceImg },
      { id: 'g4', name: 'Long Grain Rice', weight: '10kg', price: 9000, badge: 'Premium', img: riceImg },
      { id: 'g5', name: 'Brown Rice', weight: '5kg', price: 6500, badge: 'Healthy', img: riceImg },
      { id: 'g6', name: 'Rice (Wholesale)', weight: '100kg', price: 78000, badge: 'Wholesale', img: riceImg },
    ]
  },
  {
    id: 'oils',
    title: 'Oils & Fats',
    eyebrow: 'Cooking Essentials',
    icon: '🫙',
    products: [
      { id: 'o1', name: 'Red Palm Oil', weight: '5L', price: 12500, badge: 'Top Pick', img: palmOilImg },
      { id: 'o2', name: 'Groundnut Oil', weight: '5L', price: 14000, badge: 'Premium', img: palmOilImg },
      { id: 'o3', name: 'Coconut Oil', weight: '1L', price: 4500, badge: 'Organic', img: palmOilImg },
      { id: 'o4', name: 'Palm Kernel Oil', weight: '5L', price: 11000, badge: 'Local', img: palmOilImg },
      { id: 'o5', name: 'Vegetable Oil', weight: '5L', price: 10500, badge: 'Daily Use', img: palmOilImg },
      { id: 'o6', name: 'Palm Oil (Bulk)', weight: '25L', price: 60000, badge: 'Wholesale', img: palmOilImg },
    ]
  },
  {
    id: 'beans',
    title: 'Beans & Legumes',
    eyebrow: 'Protein Rich',
    icon: '🫘',
    products: [
      { id: 'b1', name: 'Oloyin Honey Beans', weight: '5kg', price: 6200, badge: 'Trending', img: heroImg },
      { id: 'b2', name: 'Black-eyed Beans', weight: '5kg', price: 5800, badge: 'Classic', img: heroImg },
      { id: 'b3', name: 'Brown Beans', weight: '10kg', price: 11000, badge: 'Popular', img: heroImg },
      { id: 'b4', name: 'Cowpea (Ewa)', weight: '5kg', price: 5500, badge: 'Local', img: heroImg },
      { id: 'b5', name: 'Lentils', weight: '2kg', price: 3800, badge: 'Healthy', img: heroImg },
      { id: 'b6', name: 'Beans (Wholesale)', weight: '50kg', price: 55000, badge: 'Bulk', img: heroImg },
    ]
  }
];

/* ─── DEAL OF THE DAY CARD ──────────────────────── */
function DealCard({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const price = product.prices[selectedSize] * quantity;

  const handleOrder = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      className="deal-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="deal-card-img-box">
        <span className="deal-tag">{product.tag}</span>
        <motion.img
          src={product.img}
          alt={product.name}
          className="deal-card-img"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        />
      </div>

      <div className="deal-card-body">
        <div className="deal-rating">
          {'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}
          <span className="rating-text"> ({product.reviews} reviews)</span>
        </div>
        <h3 className="deal-name">{product.name}</h3>
        <p className="deal-desc">{product.desc}</p>

        <div className="deal-sizes">
          {product.sizes.map(s => (
            <button
              key={s}
              className={`variant-btn ${selectedSize === s ? 'active' : ''}`}
              onClick={() => setSelectedSize(s)}
            >{s}</button>
          ))}
        </div>

        <div className="deal-footer">
          <div className="qty-selector">
            <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
            <span className="qty-val">{quantity}</span>
            <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <div className="deal-price-col">
            <span className="deal-price">₦{price.toLocaleString()}</span>
            <motion.button
              className={`btn-primary deal-order-btn ${added ? 'success' : ''}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleOrder}
            >
              {added ? '✓ Added!' : 'Order Now'}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── SCROLLABLE MINI PRODUCT CARD ─────────────── */
function MiniCard({ product }) {
  const [added, setAdded] = useState(false);
  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="mini-card">
      <span className="mini-badge">{product.badge}</span>
      <img src={product.img} alt={product.name} className="mini-img" />
      <div className="mini-body">
        <h4 className="mini-name">{product.name}</h4>
        <span className="mini-weight">{product.weight}</span>
        <div className="mini-footer">
          <span className="mini-price">₦{product.price.toLocaleString()}</span>
          <button
            className={`mini-add-btn ${added ? 'added' : ''}`}
            onClick={handleAdd}
          >
            {added ? '✓' : '+'}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── CATEGORY SECTION ──────────────────────────── */
function CategoryRow({ category }) {
  return (
    <motion.div
      className="cat-row"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="cat-row-header">
        <div className="cat-row-title-group">
          <span className="cat-icon">{category.icon}</span>
          <div>
            <p className="section-eyebrow" style={{ marginBottom: 0 }}>{category.eyebrow}</p>
            <h3 className="cat-title">{category.title}</h3>
          </div>
        </div>
        <a href="/products" className="cat-view-all">View All →</a>
      </div>

      <div className="mini-cards-scroll">
        {category.products.map(p => <MiniCard key={p.id} product={p} />)}
      </div>
    </motion.div>
  );
}

/* ─── MAIN EXPORT ───────────────────────────────── */
function FeaturedProduct() {
  return (
    <>
      {/* ── DEAL OF THE DAY ── */}
      <section className="section featured-section">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Limited Time</p>
          <h2 className="section-title">Deal of the Day</h2>
          <p className="section-sub">Handpicked top sellers at their best prices — refreshed daily.</p>
        </motion.div>

        <div className="deals-grid">
          {dealOfTheDay.map(p => <DealCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ── CATEGORY SCROLL SECTIONS ── */}
      <section className="section cat-sections">
        {categories.map(cat => <CategoryRow key={cat.id} category={cat} />)}
      </section>
    </>
  );
}

export default FeaturedProduct;
