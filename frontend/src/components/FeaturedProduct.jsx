import { useState } from 'react';
import { motion } from 'framer-motion';
import riceImg from '../assets/images/rice.png';
import palmOilImg from '../assets/images/palmoil.png';
import heroImg from '../assets/images/hero.png';

const products = [
  {
    id: 1,
    tag: "Deal of the Week",
    name: "Premium Local White Rice",
    img: riceImg,
    rating: "4.9/5 from 340 reviews",
    desc: "Our best-selling Nigerian local rice. Perfectly parboiled, completely stone-free, and meticulously cleaned. Elevate your Sunday rice or daily meals with grains that don't stick and taste amazing.",
    sizes: ['5kg', '10kg', '50kg'],
    prices: { '5kg': 4500, '10kg': 8500, '50kg': 40000 }
  },
  {
    id: 2,
    tag: "Bestseller",
    name: "Fresh Red Palm Oil",
    img: palmOilImg,
    rating: "4.8/5 from 210 reviews",
    desc: "Pure, unrefined palm oil sourced directly from local mills. Rich colour, full flavour. Available in 1L, 5L & 25L.",
    sizes: ['1L', '5L', '25L'],
    prices: { '1L': 2500, '5L': 12500, '25L': 60000 }
  },
  {
    id: 3,
    tag: "Trending Now",
    name: "Oloyin Honey Beans",
    img: heroImg, 
    rating: "4.7/5 from 180 reviews",
    desc: "Sweet, tender oloyin beans hand-sorted and sun-dried. Perfect for porridge, moin moin and akara.",
    sizes: ['5kg', '10kg', '50kg'],
    prices: { '5kg': 6200, '10kg': 12000, '50kg': 58000 }
  }
];

function FeaturedProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[1] || product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [buttonText, setButtonText] = useState('Order Now');

  const currentPrice = product.prices[selectedSize];
  const totalPrice = currentPrice * quantity;

  const handleOrder = () => {
    setButtonText('✓ Added to Order');
    setTimeout(() => setButtonText('Order Now'), 2000);
  };

  return (
    <div className="featured-inner">
        {/* Left Image Side */}
        <motion.div 
            className="featured-image-box"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.img 
                src={product.img} 
                alt={product.name} 
                className="featured-img"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                style={product.id === 3 ? { objectPosition: 'center 70%', objectFit: 'cover' } : {}}
            />
        </motion.div>

        {/* Right Ordering Side */}
        <motion.div 
            className="featured-info-box"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            <p className="section-eyebrow" style={{marginBottom: '0.5rem'}}>{product.tag}</p>
            <h2 className="section-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{product.name}</h2>
            <div className="featured-rating">
                <span>★★★★★</span>
                <span className="rating-text">({product.rating})</span>
            </div>
            
            <p className="featured-desc">
                {product.desc}
            </p>

            <div className="featured-divider"></div>

            {/* Size Selector */}
            <div className="order-group">
                <h4 className="group-label">Select Size</h4>
                <div className="variant-options">
                    {product.sizes.map(size => (
                        <button 
                            key={size}
                            className={`variant-btn ${selectedSize === size ? 'active' : ''}`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity Selector */}
            <div className="order-group">
                <h4 className="group-label">Quantity</h4>
                <div className="qty-selector">
                    <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                    <span className="qty-val">{quantity}</span>
                    <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
            </div>

            <div className="featured-divider"></div>

            {/* Price and Checkout */}
            <div className="featured-checkout">
                <div className="price-display">
                    <span className="price-label">Total Price</span>
                    <span className="price-value">₦{totalPrice.toLocaleString()}</span>
                </div>
                
                <motion.button 
                    className={`btn-primary order-massive-btn ${buttonText !== 'Order Now' ? 'success' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleOrder}
                >
                    {buttonText}
                </motion.button>
            </div>
            <p className="delivery-note">🚚 Free delivery on orders above ₦50,000</p>
        </motion.div>
    </div>
  );
}

function FeaturedProduct() {
  return (
    <section className="section featured-section">
        <div className="section-head" style={{ marginBottom: '3rem' }}>
            <p className="section-eyebrow">Handpicked Selections</p>
            <h2 className="section-title">Featured Products</h2>
        </div>

        <div className="featured-scroll-container">
            {products.map(p => <FeaturedProductCard key={p.id} product={p} />)}
        </div>
        <div className="scroll-indicator">
            <span>Swipe to see more products ➔</span>
        </div>
    </section>
  );
}

export default FeaturedProduct;
