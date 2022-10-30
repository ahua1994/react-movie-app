import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Details.scss";

function Details() {
    const [trailer, setTrailer] = useState(null);
    const location = useLocation();
    const baseUrl = `https://image.tmdb.org/t/p/w1280`;
    const { state: movie } = location;
    const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY;
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}&language=en-US`
        )
            .then(x => x.json())
            .then(x => {
                setTrailer(x.results[0].key);
            });
    }, []);
    console.log(trailer);
    return (
        <div className="Details">
            {location.state && trailer && (
                <div className="main">
                    <div className="poster">
                        <img src={baseUrl + movie.poster_path} alt={movie.title} />
                        <h5>Release Date: {movie.release_date}</h5>
                        <h5>Rating: {movie.vote_average.toFixed(1)}</h5>
                        <h5>Total Votes: {movie.vote_count}</h5>
                    </div>
                    <div className="extra">
                        <h3>{movie.title}</h3>
                        <iframe src={`https://www.youtube.com/embed/${trailer}`}></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Details;
