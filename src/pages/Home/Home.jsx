import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Home.scss";

function Home() {
    const [list, setList] = useState([]);
    const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
            .then(x => x.json())
            .then(x => setList(x.results));
    }, []);
    console.log(list);
    return (
        <div className="Home">
            {list.length !== 0 && list?.map(movie => <MovieCard key={movie.id} {...{ movie }} />)}
        </div>
    );
}

export default Home;
