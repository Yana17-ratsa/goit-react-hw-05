import { Link, useLocation } from "react-router-dom"
// import PropTypes from 'prop-types';

export default function MovieList({movies}) {
    const location = useLocation();
    return(
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={location}>{movie.title}</Link>
                </li>
            ))} 
        </ul>
    )
}

