export default function SearchMovies({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="movieName" />
      <button type="submit">Search</button>
    </form>
  );
}
