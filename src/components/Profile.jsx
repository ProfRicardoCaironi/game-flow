import './Profile.css';
import { User, Camera, Save } from 'lucide-react';
import { toast } from 'react-toastify'; // 1. Importar o toast

export function Profile({ user, setUser }) {
  // Função para lidar com a mudança nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // 2. Função para salvar e disparar o alerta
  const handleSave = () => {
    // Aqui você poderia colocar uma lógica de salvar no Banco ou LocalStorage
    toast.success("Perfil atualizado com sucesso! 🎮", {
      position: "top-right",
      theme: "dark",
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar-wrapper">
          {/* Usei um avatar genérico caso o seu do github não carregue */}
          <img src={`https://unavatar.io/github/${user.name}`} alt="Avatar" />
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

        {/* 3. Adicionar o onClick chamando a função handleSave */}
        <button className="save-btn" onClick={handleSave}>
          <Save size={18}/> Salvar Alterações
        </button>
      </div>
    </div>
  );
}