import { Container, Typography } from '@mui/material';

export default function Favorites() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">Ulubione</Typography>
      <Typography>Tu będą zapisane memy – funkcja może być dodana później.</Typography>
    </Container>
  );
}
