import { Link, useLocation } from 'react-router-dom';

export default function MovieItem({ movie }) {
  const location = useLocation();

  const { id, poster_path, title } = movie;

  const defaultImg =
    'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg';

  return (
    <div>
      <Link to={`/movies/${id}`} state={location}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
        />
      </Link>
      <p>{title}</p>
    </div>
  );
}
