import "./MovieCard.scss";

function MovieCard({ movie }) {
    const baseUrl = `https://image.tmdb.org/t/p/w1280`;
    console.log(movie);
    return (
        <div className="MovieCard">
            <img src={baseUrl + movie.poster_path} alt="" />
            <h5>{movie.title}</h5>
        </div>
    );
}

export default MovieCard;
