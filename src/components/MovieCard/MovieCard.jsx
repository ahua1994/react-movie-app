import { useNavigate } from "react-router-dom";
import "./MovieCard.scss";

function MovieCard({ movie }) {
    const baseUrl = `https://image.tmdb.org/t/p/w1280`;
    const navigate = useNavigate();
    let num = movie.vote_average;
    function ratingColor() {
        return num >= 7 ? "green" : num >= 6 ? "goldenrod" : "red";
    }
    console.log(ratingColor());
    return (
        <div onClick={() => navigate("/details", { state: movie })} className="MovieCard">
            <h5 className="rating" style={{ backgroundColor: ratingColor() }}>
                {num.toFixed(1)}
            </h5>
            <img src={baseUrl + movie.poster_path} alt={movie.title} />
            <h5 className="title">{movie.title}</h5>
            <div className="slide">
                <h2>Overview</h2>
                <h5>{movie.overview}</h5>
            </div>
        </div>
    );
}

export default MovieCard;
