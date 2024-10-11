import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../../movies-api';
import { useParams } from 'react-router-dom';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  useEffect(() => {
    async function fetchData() {
      const data = await getMovieReviews(movieId);
      setReviews(data.results);
      console.log(data.results);
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {/* {reviews.length === 0 && <p>We do not have any reviews for this movie</p>} */}
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
