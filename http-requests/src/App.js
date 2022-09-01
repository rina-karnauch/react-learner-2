import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    function fetchMoviesHandler() {
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
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {!isLoading && movies.length > 0 && <MoviesList movies={movies}/>}
                {!isLoading && movies.length === 0 && !error && <p>no movies found.</p>}
                {isLoading && <p>Loading...</p>}
                {!isLoading && error && <p>{error}</p>}
            </section>
        </React.Fragment>
    );
}

export default App;
