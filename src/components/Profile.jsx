import './Profile.css';
import { User, Camera, Save } from 'lucide-react';

export function Profile({ user, setUser }) {
  // Função para lidar com a mudança nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar-wrapper">
          <img src="https://github.com/ricardo.png" alt="Avatar" />
          <button className="edit-avatar"><Camera size={16}/></button>
        </div>
        <h2>Configurações de Conta</h2>
      </div>

      <div className="profile-form">
        <div className="input-group">
          <label>Nickname</label>
          <input 
            type="text" 
            name="name" 
            value={user.name} 
            onChange={handleChange} 
          />
        </div>

        <div className="input-group">
          <label>Nível Atual</label>
          <input 
            type="number" 
            name="level" 
            value={user.level} 
            onChange={handleChange} 
          />
        </div>

        <button className="save-btn">
          <Save size={18}/> Salvar Alterações
        </button>
      </div>
    </div>
  );
}