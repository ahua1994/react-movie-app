import "./MovieCard.scss";

function MovieCard({ movie }) {
    const baseUrl = `https://image.tmdb.org/t/p/w1280`;
    console.log(movie);
    return (
        <div className="MovieCard">
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
