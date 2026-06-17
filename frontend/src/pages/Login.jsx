import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
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
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Welcome Back</h2>
            <p style={{ color: 'var(--text-muted)' }}>Sign in to manage your foodstuff orders.</p>
        </div>

        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label className="input-label">Email Address</label>
                <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                    placeholder="you@example.com"
                />
            </div>
            <div className="input-group">
                <label className="input-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    Password
                    <a href="#" style={{ color: 'var(--orange-light)', textDecoration: 'none', fontSize: '0.85rem' }}>Forgot?</a>
                </label>
                <input 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                    placeholder="••••••••"
                />
            </div>
            <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', marginTop: '1rem' }}
            >
                Sign In
            </motion.button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)' }}>
            New to Tentos Foods? <Link to="/register" style={{ color: 'var(--orange)', fontWeight: '700', textDecoration: 'none' }}>Create an account</Link>
        </p>
      </div>
    </motion.section>
  );
}

export default Login;
