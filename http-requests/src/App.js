import React, {useState, useEffect, useCallback} from 'react';

import AddMovie from "./components/AddMovie";
import MoviesList from './components/MoviesList';
import './App.css';

function App() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    function addMovieHandler(movie) {
        fetch(
            'https://react-guide-http-rk-default-rtdb.europe-west1.firebasedatabase.app/movies.json',
            {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(movie),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((response) => {

            console.log(response);
        }).catch((error) => {
            setError(error);
        })
    }

    const fetchMoviesHandler = useCallback(() => {
        setIsLoading(true);
        setError(null);
        // https://swapi.dev/api/films/
        // https://react-guide-http-rk-default-rtdb.europe-west1.firebasedatabase.app/movies.json
        fetch('https://react-guide-http-rk-default-rtdb.europe-west1.firebasedatabase.app/movies.json').then((response) => {
            if (!response.ok) {
                throw new Error("something went wrong during http request.");
            }
            return response.json();
        }).then((data) => {

            const parsedMovies = [];
            for (const key in data) {
                parsedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate,
                })
            }
            setMovies(parsedMovies);
            setIsLoading(false);
        }).catch((error) => {
            setIsLoading(false);
            setError(error.message);
        });
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    let content = <p>Found no movies</p>;

    if (movies.length > 0) {
        content = <MoviesList movies={movies}/>
    }
    if (error) {
        content = <p>{error}</p>
    }
    if (isLoading) {
        content = <p>Loading...</p>;
    }


    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler}/>
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>
    );
}

export default App;
