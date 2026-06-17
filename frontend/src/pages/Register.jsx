import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <motion.section 
        className="auth-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
    >
      <div className="auth-card">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="logo-badge" style={{ margin: '0 auto 1.5rem', width: '60px', height: '60px', fontSize: '1.8rem' }}>👨‍🍳</div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Create Account</h2>
            <p style={{ color: 'var(--text-muted)' }}>Join us to shop quality Nigerian foodstuff.</p>
        </div>

        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label className="input-label">Full Name</label>
                <input 
                    type="text" 
                    name="name"
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="John Doe"
                />
            </div>
            <div className="input-group">
                <label className="input-label">Email Address</label>
                <input 
                    type="email" 
                    name="email"
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="you@example.com"
                />
            </div>
            <div className="input-group">
                <label className="input-label">Password</label>
                <input 
                    type="password" 
                    name="password"
                    required 
                    value={formData.password}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Create a strong password"
                />
            </div>
            <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', marginTop: '1rem' }}
            >
                Create Account
            </motion.button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)' }}>
            Already have an account? <Link to="/login" style={{ color: 'var(--orange)', fontWeight: '700', textDecoration: 'none' }}>Sign In</Link>
        </p>
      </div>
    </motion.section>
  );
}

export default Register;
