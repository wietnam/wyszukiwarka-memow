import { Grid } from '@mui/material';
import MemeCard from './MemeCard';
import { useMemeContext } from '../context/MemeContext';

export default function MemeList() {
  const { memes } = useMemeContext();

  return (
    <Grid container spacing={2}>
      {memes.map((meme) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={meme.id}>
          <MemeCard meme={meme} />
        </Grid>
      ))}
    </Grid>
  );
}
