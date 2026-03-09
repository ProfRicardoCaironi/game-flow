import './GameModal.css';
import { X, Trophy, Users, Clock } from 'lucide-react';

export function GameModal({ game, onClose }) {
  if (!game) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}><X /></button>
        <img src={game.banner} alt={game.title} className="modal-banner" />
        <div className="modal-body">
          <span className="modal-category">{game.category}</span>
          <h2>{game.title}</h2>
          <div className="game-stats">
            <div className="stat"><Trophy size={16}/> #01</div>
            <div className="stat"><Users size={16}/> 12k</div>
            <div className="stat"><Clock size={16}/> 40h</div>
          </div>
          <p className="description">Domine as habilidades e suba no ranking no ecossistema Vortex.</p>
          <button className="start-game-btn">INICIAR JOGADA</button>
        </div>
      </div>
    </div>
  );
}