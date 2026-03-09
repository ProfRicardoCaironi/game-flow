import './Footer.css';
import { Github, Instagram, Linkedin, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="vortex-footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>© {currentYear} <strong>VORTEX_</strong>. Desenvolvido com <Heart size={14} className="heart-icon" /> por Ricardo_Dev.</p>
        </div>

        <div className="footer-right">
          <a href="https://github.com" target="_blank" rel="noreferrer"><Github size={20} /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
}