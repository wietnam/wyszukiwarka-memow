import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">O aplikacji</Typography>
      <Typography>
        Ta aplikacja umożliwia wyszukiwanie memów z użyciem Giphy API. Stworzona w React, z użyciem Context API, React Router i Material-UI.
      </Typography>
    </Container>
  );
}
