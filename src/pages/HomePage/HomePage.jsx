import { useEffect, useState } from "react"
import { getTrendingMovies } from "../../../movies-api"
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        setLoading(true);
        getTrendingMovies()
        .then(data => setTrendingMovies(data.results)
        )
        .finally(() => setLoading(false));
    }, [])


    return (
        <div>
            <h2>Trending today</h2>
            {loading && <p>Loading... Please wait!</p>}
            {trendingMovies.length > 0 && <MovieList movies={trendingMovies}/> }
        </div>
    )
}
