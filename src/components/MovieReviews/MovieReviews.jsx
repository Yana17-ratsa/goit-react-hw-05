import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../../../movies-api';

export default function MovieReviews(movie) {
  const [reviews, setReviews] = useState({});
  useEffect(() => {
    async function fetchData() {
      const data = await getMovieReviews(movie.id);
      setReviews(data.results);
      console.log(data);
    }
    fetchData();
  }, [movie]);

  return <p>{reviews}</p>;
}
