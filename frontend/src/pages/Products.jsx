import { useState } from 'react';
import { motion } from 'framer-motion';
import riceImg from '../assets/images/rice.png';
import palmOilImg from '../assets/images/palmoil.png';
import heroImg from '../assets/images/hero.png'; // Fallback for other items

function Products() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (e, name, price) => {
    const btn = e.target;
    setCartCount(prev => prev + 1);
    
    const originalText = btn.textContent;
    btn.textContent = '✓ Added';
    btn.style.background = 'var(--green)';
    btn.style.borderColor = 'var(--green)';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.borderColor = '';
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
        className="section" 
        id="products"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <motion.div 
            className="section-head"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <p className="section-eyebrow">Our Bestsellers</p>
            <h2 className="section-title">Popular Foodstuff</h2>
            <p className="section-sub">Our most purchased staples — bulk or retail, always the freshest quality packed securely.</p>
        </motion.div>

        <motion.div 
            className="dishes-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {/* Real Image Cards */}
            <motion.article variants={itemVariants} className="dish-card">
                <div className="dish-img-wrapper">
                    <img src={riceImg} alt="Local White Rice" className="dish-img" />
                </div>
                <div className="dish-body">
                    <span className="dish-tag">Grains</span>
                    <h3 className="dish-name">Local White Rice</h3>
                    <p className="dish-desc">Premium Nigerian local rice — well-parboiled, stone-free, and cleaned. Available in 5kg, 10kg &amp; 50kg bags.</p>
                    <div className="dish-footer">
                        <div>
                            <span className="dish-price">₦8,500</span>
                            <span className="dish-unit">/10kg</span>
                        </div>
                        <button className="add-to-cart" onClick={(e) => addToCart(e, 'Local White Rice', 8500)}>+ Add</button>
                    </div>
                </div>
            </motion.article>

            <motion.article variants={itemVariants} className="dish-card">
                <div className="dish-img-wrapper">
                    <img src={palmOilImg} alt="Fresh Red Palm Oil" className="dish-img" />
                </div>
                <div className="dish-body">
                    <span className="dish-tag">Cooking Oil</span>
                    <h3 className="dish-name">Fresh Red Palm Oil</h3>
                    <p className="dish-desc">Pure, unrefined palm oil sourced directly from local mills. Rich colour, full flavour. Available in 1L, 5L &amp; 25L.</p>
                    <div className="dish-footer">
                        <div>
                            <span className="dish-price">₦12,500</span>
                            <span className="dish-unit">/5L tin</span>
                        </div>
                        <button className="add-to-cart" onClick={(e) => addToCart(e, 'Red Palm Oil', 12500)}>+ Add</button>
                    </div>
                </div>
            </motion.article>

            <motion.article variants={itemVariants} className="dish-card">
                <div className="dish-img-wrapper">
                    <img src={heroImg} alt="Oloyin Honey Beans" className="dish-img" style={{ objectPosition: 'center 70%' }} />
                </div>
                <div className="dish-body">
                    <span className="dish-tag">Legumes</span>
                    <h3 className="dish-name">Oloyin Honey Beans</h3>
                    <p className="dish-desc">Sweet, tender oloyin beans hand-sorted and sun-dried. Perfect for porridge, moin moin and akara.</p>
                    <div className="dish-footer">
                        <div>
                            <span className="dish-price">₦6,200</span>
                            <span className="dish-unit">/5kg</span>
                        </div>
                        <button className="add-to-cart" onClick={(e) => addToCart(e, 'Oloyin Beans', 6200)}>+ Add</button>
                    </div>
                </div>
            </motion.article>

            <motion.article variants={itemVariants} className="dish-card">
                <div className="dish-img-wrapper">
                    <img src={heroImg} alt="Ground Crayfish" className="dish-img" style={{ objectPosition: 'center 20%' }} />
                </div>
                <div className="dish-body">
                    <span className="dish-tag">Spices</span>
                    <h3 className="dish-name">Ground Crayfish</h3>
                    <p className="dish-desc">Sun-dried, freshly ground crayfish — the essential Nigerian cooking spice. Adds depth to all soups and stews.</p>
                    <div className="dish-footer">
                        <div>
                            <span className="dish-price">₦3,800</span>
                            <span className="dish-unit">/500g</span>
                        </div>
                        <button className="add-to-cart" onClick={(e) => addToCart(e, 'Ground Crayfish', 3800)}>+ Add</button>
                    </div>
                </div>
            </motion.article>
            
            <motion.article variants={itemVariants} className="dish-card">
                <div className="dish-img-wrapper">
                    <img src={riceImg} alt="Semolina" className="dish-img" style={{ filter: 'hue-rotate(180deg)' }} />
                </div>
                <div className="dish-body">
                    <span className="dish-tag">Flour</span>
                    <h3 className="dish-name">Semolina (1kg &amp; 2kg)</h3>
                    <p className="dish-desc">Finely milled Nigerian semolina — smooth, lump-free, and easy to cook. Available in 1kg and 2kg packs.</p>
                    <div className="dish-footer">
                        <div>
                            <span className="dish-price">₦1,800</span>
                            <span className="dish-unit">/1kg pack</span>
                        </div>
                        <button className="add-to-cart" onClick={(e) => addToCart(e, 'Semolina', 1800)}>+ Add</button>
                    </div>
                </div>
            </motion.article>

        </motion.div>
    </motion.section>
  );
}

export default Products;
