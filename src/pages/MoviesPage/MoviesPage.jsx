import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieBySearch } from '../../../movies-api';
import SearchMovies from '../../components/SearchMovies/SearchMovies';
import MovieList from '../../components/MovieList/MovieList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [params] = useSearchParams();
  const movieName = params.get('movieName') ?? '';

  useEffect(() => {
    async function fetchData() {
      const data = await getMovieBySearch(movieName);
      setMovies(data);
    }
    fetchData();
  }, [movieName]);

  // const [loading, setLoading] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [error, setError] = useState(false);
  // const movieSearch = searchParams.get('movieSearch') ?? '';

  // const newMovieSearch = newSearch => {
  //   searchParams.set('movieSearch', newSearch);
  //   setSearchParams(searchParams);
  // };

  // useEffect(() => {
  //   if (!movieSearch) return;
  //   setMovies([]);
  //   setError(false);
  //   setLoading(true);
  //   const searchMovie = async movieSearch => {
  //     try {
  //       const data = await getMovieBySearch(movieSearch);
  //       if (!data.results.length) {
  //         setError(true);
  //         return;
  //       }
  //       setMovies(data.results);
  //     } catch (error) {
  //       setError(true);
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //       setError(false);
  //     }
  //   };

  //   searchMovie(movieSearch);
  // }, [movieSearch]);

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const searchForm = event.currentTarget;
  //   const newMovieSearch = searchForm.elements.movieName.value.trim();

  //   if (!newMovieSearch) {
  //     setError(true);
  //     return;
  //   }

  //   setSearchParams({ movieSearch: newMovieSearch });
  //   searchForm.reset();
  // };

  return (
    <div>
      <p>Movies Page</p>
      <SearchMovies
      // onSubmit={handleSubmit}
      />
      {/* {loading && <p>Loading... please wait!</p>} */}
      {/* {error && <p>Error... reload page and try again! </p>} */}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
