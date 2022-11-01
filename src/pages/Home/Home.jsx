import { useState, useEffect } from "react";
import { Input } from "reactstrap";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Home.scss";

function Home() {
    const [list, setList] = useState([]);
    const [sortedList, setSortedList] = useState([]);
    const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
            .then(x => x.json())
            .then(x => {
                setList(x.results);
                setSortedList(x.results);
            });
    }, []);

    function handleSort(arg) {
        let newList = [...list];
        if (arg === "Title") {
            newList.sort((a, b) => a.title.localeCompare(b.title));
        } else if (arg === "Rating") {
            newList.sort((a, b) => b.vote_average - a.vote_average);
        }
        setSortedList(newList);
    }

    return (
        <>
            <Input className="sort" type="select" onChange={e => handleSort(e.target.value)}>
                <option>None</option>
                <option>Title</option>
                <option>Rating</option>
            </Input>
            <div className="Home">
                {sortedList.length !== 0 &&
                    sortedList?.map(movie => <MovieCard key={movie.id} {...{ movie }} />)}
            </div>
        </>
    );
}

export default Home;
