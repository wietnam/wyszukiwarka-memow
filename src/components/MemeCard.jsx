import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

export default function MemeCard({ meme }) {
  return (
    <Link to={`/meme/${meme.id}`} style={{ textDecoration: 'none' }}>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={meme.images.fixed_height.url}
          alt={meme.title}
        />
        <CardContent>
          <Typography variant="subtitle1">{meme.title}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
