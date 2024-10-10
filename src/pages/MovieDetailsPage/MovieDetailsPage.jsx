import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from '../../../movies-api';
import MovieItem from '../../components/MovieItem/MovieItem';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/movies');

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getMovieDetails(movieId);
      setMovie(data.results);
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <h1>Movie Details</h1>
      <Link to={backLinkRef.current}>Back to search</Link>
      {movie && <MovieItem movie={movie} />}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE!!!</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
