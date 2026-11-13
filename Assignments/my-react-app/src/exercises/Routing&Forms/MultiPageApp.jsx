import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Individual pages
function Home() {
  return (
    <div style={{
      padding: '40px',
      background: '#F0F4FF',
      borderRadius: '16px',
      border: '1px solid #C7D2FE',
      color: '#172554',
      boxShadow: '0 8px 24px rgba(30, 64, 175, 0.10)' }}>
      <h2 style={{
        color: '#1E3A8A',
        fontSize: '32px',
        fontWeight: '800',
        marginTop: 0,
        marginBottom: '16px' }}>Home</h2>
      <p style={{
        color: '#334155',
        fontSize: '17px',
        lineHeight: '1.8'
      }}>Welcome to our homepage!</p>
    </div>
  );
}

function About() {
  return (
    <div style={{
      padding: '40px',
      background: '#1E293B',
      borderRadius: '16px',
      border: '1px solid #475569',
      color: '#FFFFFF',
      boxShadow: '0 8px 24px rgba(15, 23, 42, 0.2)'
    }}>
      <h2 style={{
        color: '#93C5FD',
        fontSize: '32px',
        fontWeight: '800',
        marginTop: 0,
        marginBottom: '16px'
      }}>About Us</h2>
      <p style={{
        color: '#F1F5F9',
        fontSize: '17px',
        lineHeight: '1.8'
      }}>We are a team of creative developers learning React.</p>
    </div>
  );
}

function Contact() {
  return (
    <div style={{
      padding: '40px',
      background: '#ECFDF5',
      borderRadius: '16px',
      border: '1px solid #A7F3D0',
      color: '#064E3B',
      boxShadow: '0 8px 24px rgba(5, 150, 105, 0.10)'
      }}>
      <h2 style={{
        color: '#065F46',
        fontSize: '32px',
        fontWeight: '800',
        marginTop: 0,
        marginBottom: '16px'
      }}>Contact</h2>
      <p style={{
        color: '#374151',
        fontSize: '17px',
        lineHeight: '1.8'
      }}>Email: contact@example.com</p>
      <p style={{
        color: '#374151',
        fontSize: '17px',
        lineHeight: '1.8'
      }}>Address: 123 React Street, JS City</p>
    </div>
  );
}

// Navbar
function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '12px',
      background: '#172554',
      padding: '20px',
      borderRadius: '14px',
      margin: '20px',
      boxShadow: '0 6px 20px rgba(23, 37, 84, 0.2)',
      flexWrap: 'wrap' }}>
      <Link to="/" style={{ color: '#FFFFFF',
        background: '#4F46E5',
        padding: '12px 24px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '700',
        fontSize: '15px' }}>Home</Link>
      <Link to="/about" style={{ color: '#E0E7FF',
        background: '#4F46E5',
        padding: '12px 24px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '15px' }}>About</Link>
      <Link to="/contact" style={{ color: '#E0E7FF',
        background: '#4F46E5',
        padding: '12px 24px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '15px' }}>Contact</Link>
    </nav>
  );
}

// Main App
function MultiPageApp() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MultiPageApp;