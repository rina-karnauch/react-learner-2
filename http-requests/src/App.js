import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandler = useCallback(() => {
        setIsLoading(true);
        setError(null);
        fetch('https://swapi.dev/api/films/').then((response) => {
            if (!response.ok) {
                throw new Error("something went wrong during http request.");
            }
            return response.json();
        }).then((data) => {

            const parsedMovies = data.results.map((movie) => {
                return {
                    id: movie.episode_id,
                    title: movie.title,
                    openingText: movie.opening_crawl,
                    releaseDate: movie.release_date,
                }
            });
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
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>
    );
}

export default App;
