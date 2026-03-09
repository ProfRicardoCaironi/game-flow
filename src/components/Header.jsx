import './Header.css';
import { Bell, Zap, Search } from 'lucide-react';

export function Header({ search, setSearch, user }) {
  return (
    <header className="vortex-header">
      <div className="user-info">
        <h3>Bem-vindo, <span className="highlight">{user.name}</span></h3>
        <p>Status: Online</p>
      </div>

      <div className="search-bar">
        <Search size={18} color="#94a3b8" />
        <input type="text" placeholder="Buscar jogo..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="header-actions">
        <div className="badge"><Zap size={14}/> PRO PLAYER</div>
        <button className="notification-btn"><Bell size={20} /></button>
      </div>
    </header>
  );
}