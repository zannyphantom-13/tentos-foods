import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer" id="contact">
        <div className="footer-container">
            <div className="footer-grid">

                <div className="footer-brand">
                    <div className="footer-logo">
                        <span className="logo-tentos">Tentos</span>
                        <span className="logo-foods" style={{ color: '#52b788' }}>foods</span>
                    </div>
                    <p>Your trusted source for fresh, quality Nigerian foodstuff — sourced from local farmers and delivered across the nation since 2020.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook" className="social-link">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </a>
                        <a href="#" aria-label="Instagram" className="social-link">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                        </a>
                        <a href="#" aria-label="WhatsApp" className="social-link">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.998 2.003C6.476 2.003 2 6.479 2 12.002c0 1.77.462 3.432 1.268 4.876L2 22l5.283-1.383A9.953 9.953 0 0 0 11.998 22c5.521 0 9.997-4.476 9.997-9.998s-4.476-9.999-9.997-9.999z"/></svg>
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Our Products</h4>
                    <ul>
                        <li><Link to="/products">Rice &amp; Grains</Link></li>
                        <li><Link to="/products">Beans &amp; Legumes</Link></li>
                        <li><Link to="/products">Cooking Oils</Link></li>
                        <li><Link to="/products">Spices &amp; Seasonings</Link></li>
                        <li><Link to="/products">Fish &amp; Seafood</Link></li>
                        <li><Link to="/products">Tubers &amp; Roots</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/deals">Deals &amp; Offers</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Get in Touch</h4>
                    <address>
                        <p>📍 14 Market Road, Onitsha,<br />Anambra State, Nigeria</p>
                        <p><a href="tel:+2348012345678">📞 +234 801 234 5678</a></p>
                        <p><a href="mailto:hello@tentosfoods.com">✉️ hello@tentosfoods.com</a></p>
                        <p><a href="https://wa.me/2348012345678">💬 Chat us on WhatsApp</a></p>
                        <p>⏰ Mon–Sat: 7am – 7pm</p>
                    </address>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Tentos Foods Variety. All rights reserved.</p>
                <p>Made with ❤️ in Nigeria 🇳🇬</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
