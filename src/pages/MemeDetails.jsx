import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Typography, Card, CardMedia, CardContent } from '@mui/material';

export default function MemeDetails() {
  const { id } = useParams();
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${import.meta.env.VITE_GIPHY_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMeme(data.data));
  }, [id]);

  if (!meme) return <Typography sx={{ mt: 4 }}>Ładowanie...</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardMedia
          component="img"
          image={meme.images.original.url}
          alt={meme.title}
        />
        <CardContent>
          <Typography variant="h5">{meme.title}</Typography>
          <Typography variant="body2">
            Źródło:{' '}
            <a href={meme.url} target="_blank" rel="noreferrer">
              {meme.url}
            </a>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
