import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../../movies-api';

export default function MovieReviews({ movie }) {
  const [reviews, setReviews] = useState({});
  useEffect(() => {
    async function fetchData() {
      const data = await getMovieReviews(movie);
      setReviews(data.results);
      console.log(data.results);
    }
    fetchData();
  }, [movie]);

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
