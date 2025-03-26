import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" component="span" sx={{ mr: 2 }}>
            Wyszukiwarka Memów
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">O aplikacji</Button>
          <Button color="inherit" component={Link} to="/favorites">Ulubione</Button>
        </Box>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}
