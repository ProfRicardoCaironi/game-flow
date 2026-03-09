import './Sidebar.css';
import { LayoutDashboard, Gamepad2, User } from 'lucide-react';

export function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="vortex-sidebar">
      <h2 className="logo">GAMER X</h2>
      <nav>
        {/* Aba Dashboard */}
        <div 
          className={`nav-item ${activeTab === 'all' ? 'active' : ''}`} 
          onClick={() => setActiveTab('all')}
        >
          <LayoutDashboard size={20}/> Dashboard
        </div>

        {/* Aba Meus Jogos (Favoritos) */}
        <div 
          className={`nav-item ${activeTab === 'favorites' ? 'active' : ''}`} 
          onClick={() => setActiveTab('favorites')}
        >
          <Gamepad2 size={20}/> Meus Jogos
        </div>

        {/* Aba Perfil - ADICIONADO onClick e active class */}
        <div 
          className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} 
          onClick={() => setActiveTab('profile')}
        >
          <User size={20}/> Perfil
        </div>
      </nav>
    </aside>
  );
}