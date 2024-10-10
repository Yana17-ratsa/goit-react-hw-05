import { useSearchParams } from 'react-router-dom';

export default function SearchMovies() {
  const [params, setParams] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();

    params.set('movieName', event.target.elements.movieName.value.trim());
    setParams(params);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="movieName" />
      <button type="submit">Search</button>
    </form>
  );
}
