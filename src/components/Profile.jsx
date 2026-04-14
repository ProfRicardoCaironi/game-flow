import { useState } from 'react'; // Precisamos do useState local para o loading
import './Profile.css';
import { Camera, Save } from 'lucide-react';
import { toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners'; // Importando o spinner

export function Profile({ user, setUser }) {
  const [isSaving, setIsSaving] = useState(false); // Estado para controlar o loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    setIsSaving(true); // 1. Ativa o spinner

    // 2. Simula um atraso de rede (1.5 segundos)
    setTimeout(() => {
      setIsSaving(false); // 3. Desativa o spinner
      
      toast.success("Perfil atualizado com sucesso! 🎮", {
        position: "top-right",
        theme: "dark",
      });
    }, 1500);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar-wrapper">
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

        {/* 4. Lógica de renderização do botão */}
        <button 
          className="save-btn" 
          onClick={handleSave} 
          disabled={isSaving} // Desabilita o botão enquanto salva
        >
          {isSaving ? (
            <PulseLoader color="#ffffff" size={8} margin={2} />
          ) : (
            <>
              <Save size={18}/> Salvar Alterações
            </>
          )}
        </button>
      </div>
    </div>
  );
}