import { useState, useEffect, useContext } from "react";
import { Button, Form, Input, Label } from "reactstrap";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Home.scss";

function Home() {
    const [list, setList] = useState([]);
    const [sortedList, setSortedList] = useState([]);
    const [input, setInput] = useState("");
    const [search, setSearch] = useState("");
    const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
            .then(x => x.json())
            .then(x => {
                setList(x.results);
                setSortedList(x.results);
            });
    }, []);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`)
            .then(x => x.json())
            .then(x => {
                if (!x.results) return;
                else setSortedList(x.results);
            });
    }, [search]);
    console.log(search, sortedList);

    function handleSort(arg) {
        let newList = [...sortedList];
        if (arg === "Title") {
            newList.sort((a, b) => a.title.localeCompare(b.title));
        } else if (arg === "Rating") {
            newList.sort((a, b) => b.vote_average - a.vote_average);
        }
        setSortedList(newList);
    }

    function handleSearch(e) {
        e.preventDefault();
        setSearch(input);
        setInput("");
    }

    return (
        <>
            <Form id="search" onSubmit={e => handleSearch(e)}>
                <Input
                    onChange={e => setInput(e.target.value)}
                    value={input}
                    placeholder="Enter Keyword"
                ></Input>
                <Button>Search</Button>
            </Form>
            <Input className="sort" type="select" onChange={e => handleSort(e.target.value)}>
                <option>Sort By</option>
                <option>Title</option>
                <option>Rating</option>
            </Input>
            <div className="Home">
                {sortedList?.length !== 0 &&
                    sortedList?.map(movie => <MovieCard key={movie.id} {...{ movie }} />)}
            </div>
        </>
    );
}

export default Home;
