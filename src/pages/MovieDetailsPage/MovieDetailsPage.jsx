import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../../movies-api';

import MovieInfo from '../../components/App/MovieCard/MovieInfo';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/movies');

  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <h1>Movie Details</h1>
      <Link to={backLinkRef.current}>Back to search</Link>
      <MovieInfo movie={movie} />
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews" movie={movie.id}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
