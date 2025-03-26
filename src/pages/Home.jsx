import { useEffect, useState } from 'react';
import { Container, Typography, Stack, Button } from '@mui/material';
import SearchBar from '../components/SearchBar';
import MemeList from '../components/MemeList';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { useMemeContext } from '../context/MemeContext';

export default function Home() {
  const {
    loading,
    error,
    fetchMemes,
    fetchTrendingMemes,
    page,
    setPage,
    memes,
  } = useMemeContext();

  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchTrendingMemes();
  }, []);

  const handleSearch = (q) => {
    setQuery(q);
    setPage(0);
    fetchMemes(q, 0);
  };

  const handleNext = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMemes(query, nextPage);
  };

  const handlePrev = () => {
    if (page > 0) {
      const prevPage = page - 1;
      setPage(prevPage);
      fetchMemes(query, prevPage);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Wyszukiwarka Memów
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage msg={error} />}
      <MemeList memes={memes} />
      {memes.length > 0 && (
        <Stack direction="row" spacing={2} sx={{ mt: 4 }} justifyContent="center">
          <Button onClick={handlePrev} disabled={page === 0}>
            Poprzednia
          </Button>
          <Button onClick={handleNext}>Następna</Button>
        </Stack>
      )}
    </Container>
  );
}
