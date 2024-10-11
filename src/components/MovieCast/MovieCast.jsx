import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../../movies-api';

export default function MovieCast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMovieCredits(movieId);
      setCredits(data.cast);
      console.log(data.cast);
    }
    fetchData();
  }, [movieId]);

  return (
    <ul>
      {credits.map(({ id, name, character }) => (
        <li key={id}>
          <p>Name:{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}
