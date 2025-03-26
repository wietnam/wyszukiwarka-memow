import { createContext, useContext, useState } from 'react';

const MemeContext = createContext();
export const useMemeContext = () => useContext(MemeContext);

export const MemeProvider = ({ children }) => {
  const [memes, setMemes] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(0);

  const fetchMemes = async (query, pageNum = 0) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=${query}&limit=12&offset=${pageNum * 12}`
      );
      const data = await res.json();
      setMemes(data.data);
    } catch {
      setError('Błąd ładowania memów.');
    } finally {
      setLoading(false);
    }
  };

  const fetchTrendingMemes = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&limit=12`
      );
      const data = await res.json();
      setMemes(data.data);
    } catch {
      setError('Nie udało się załadować trendów.');
    } finally {
      setLoading(false);
    }
  };

  const addFavorite = (meme) => {
    const updated = [...favorites, meme];
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const removeFavorite = (id) => {
    const updated = favorites.filter((m) => m.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <MemeContext.Provider
      value={{
        memes,
        fetchMemes,
        fetchTrendingMemes,
        loading,
        error,
        favorites,
        addFavorite,
        removeFavorite,
        page,
        setPage,
      }}
    >
      {children}
    </MemeContext.Provider>
  );
};
