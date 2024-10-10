export default function MovieInfo({ movie }) {
  const { title, overview, tagline, status } = movie;
  return (
    <div>
      <p>
        <b>{tagline}...</b>
      </p>
      <p>Title: {title}</p>
      <p>Overview: {overview}</p>
      <p>Status: {status}</p>
    </div>
  );
}
