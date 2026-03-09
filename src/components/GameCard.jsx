import './GameCard.css';
import { Play, Heart } from 'lucide-react';

export function GameCard({ title, category, banner, isFavorite, onFavorite, onPlay }) {
  return (
    <div className="vortex-card">
      <div className="card-image-wrapper">
        <img src={banner} alt={title} className="card-img" />
        <button className={`favorite-btn ${isFavorite ? 'active' : ''}`} onClick={onFavorite}>
          <Heart size={18} fill={isFavorite ? "#7c3aed" : "transparent"} stroke={isFavorite ? "#7c3aed" : "white"} />
        </button>
      </div>
      <div className="card-info">
        <h4>{title}</h4>
        <p>{category}</p>
        <button className="play-btn" onClick={onPlay}><Play size={14} fill="white"/> Jogar</button>
      </div>
    </div>
  );
}