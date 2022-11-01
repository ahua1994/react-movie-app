import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import "./Details.scss";

function Details() {
    const [trailer, setTrailer] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
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
    return (
        <div className="Details">
            {location.state && trailer && (
                <div className="main">
                    <div className="poster">
                        <img src={baseUrl + movie.poster_path} alt={movie.title} />
                        <h5 className="mt-2">Rating: {movie.vote_average.toFixed(1)}</h5>
                        <h5>Release Date: {movie.release_date}</h5>
                        <h5>Total Votes: {movie.vote_count}</h5>
                        <hr></hr>
                        <Button className="mb-3" color="primary" onClick={() => navigate("/")}>
                            Go Back
                        </Button>
                    </div>
                    <div className="extra">
                        <h3>{movie.title}</h3>
                        <div className="container">
                            <iframe
                                src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1`}
                            ></iframe>
                        </div>
                        <h4 className="mt-3">Overview</h4>
                        <hr></hr>
                        <h5>{movie.overview}</h5>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Details;
