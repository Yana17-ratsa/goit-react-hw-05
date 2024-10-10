import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../../../movies-api';
import { NavLink } from 'react-router-dom';

export default function MovieInfo({ movie }) {
  const { title, overview, tagline, status } = movie;
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getMovieReviews(movie.id);
      setReviews(data);
      console.log(data);
    }
    fetchData();
  }, [movie]);

  return (
    <div>
      <p>
        <b>{tagline}...</b>
      </p>
      <p>Title: {title}</p>
      <p>Overview: {overview}</p>
      <p>Status: {status}</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews" reviews={reviews}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
