import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { GameCard } from "./components/GameCard";
import { GameModal } from "./components/GameModal";
import { Profile } from "./components/Profile";
import { Footer } from "./components/Footer";
import { gamesData } from "./data/games";

// --- 1. IMPORTAÇÕES DO TOASTIFY ---
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGame, setSelectedGame] = useState(null);
  const [user, setUser] = useState({
    name: "Ricardo_Dev",
    level: "01",
  });

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  // --- 2. LÓGICA DE FAVORITOS (MELHORADA COM TOAST) ---
  const toggleFavorite = (id, title) => {
    setFavorites((prev) => {
      const isFav = prev.includes(id);
      if (isFav) {
        toast.info(`${title} removido!`, { theme: "dark" });
        return prev.filter((f) => f !== id);
      } else {
        toast.success(`${title} favoritado! 🚀`, { theme: "dark" });
        return [...prev, id];
      }
    });
  };

  const filteredGames = gamesData
    .filter((g) => activeTab === "all" || favorites.includes(g.id))
    .filter((g) => g.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="vortex-app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="vortex-main">
        <Header search={search} setSearch={setSearch} user={user} />

        <div className="vortex-content">
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
                        // Passamos g.title para o toast saber o nome do jogo
                        onFavorite={() => toggleFavorite(g.id, g.title)}
                        onPlay={() => setSelectedGame(g)}
                      />
                    ))}
              </div>
            </>
          )}
        </div>
        <Footer />
      </main>

      <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />

      {/* --- 3. O PALCO DOS ALERTAS (CONTAINER) --- */}
      <ToastContainer 
        position="bottom-right" 
        autoClose={3000} 
        theme="dark" 
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;