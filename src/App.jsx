import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { GameCard } from "./components/GameCard";
import { GameModal } from "./components/GameModal";
import { Profile } from "./components/Profile";
import { Footer } from "./components/Footer";
import { gamesData } from "./data/games";
import "./App.css";

function App() {
  // --- ESTADOS DA APLICAÇÃO ---
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState("all"); // Controle de navegação (Dashboard, Meus Jogos, Perfil)
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGame, setSelectedGame] = useState(null); // Jogo selecionado para o Modal
  const [user, setUser] = useState({
    name: "Ricardo_Dev",
    level: "01",
  });

  // --- EFEITO DE CARREGAMENTO (SKELETON) ---
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  // --- LÓGICA DE FAVORITOS ---
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  // --- FILTRAGEM DINÂMICA (ABA ATIVA + BUSCA) ---
  const filteredGames = gamesData
    .filter((g) => activeTab === "all" || favorites.includes(g.id))
    .filter((g) => g.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="vortex-app">
      {/* Sidebar controla a troca de abas */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="vortex-main">
        {/* Passamos o 'user' para o Header exibir o nome dinamicamente */}
        <Header search={search} setSearch={setSearch} user={user} />

        <div className="vortex-content">
          {/* RENDERIZAÇÃO CONDICIONAL: Perfil vs Dashboard */}
          {activeTab === "profile" ? (
            <Profile user={user} setUser={setUser} />
          ) : (
            <>
              <h2 className="section-title">
                {activeTab === "all" ? "Dashboard" : "Meus Favoritos"}
              </h2>

              <div className="vortex-grid">
                {isLoading
                  ? [1, 2, 3, 4].map((n) => (
                      <div key={n} className="skeleton-card" />
                    ))
                  : filteredGames.map((g) => (
                      <GameCard
                        key={g.id}
                        {...g}
                        isFavorite={favorites.includes(g.id)}
                        onFavorite={() => toggleFavorite(g.id)}
                        onPlay={() => setSelectedGame(g)}
                      />
                    ))}
              </div>
            </>
          )}
        </div>
        <Footer />
      </main>

      {/* Modal de detalhes do jogo */}
      <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
}

export default App;
