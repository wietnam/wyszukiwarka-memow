import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 4 }}>
      <TextField
        label="Wpisz hasło"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Szukaj
      </Button>
    </Box>
  );
}
