import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../../movies-api';
import { useParams } from 'react-router-dom';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await getMovieReviews(movieId);
      setReviews(response.data.results);
      console.log(response.data.results);
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 && <p>We donot any reviews for this movie</p>}
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
