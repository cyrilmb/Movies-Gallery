import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './MovieList.css';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    //dispatches list of movies on render
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //handles movie poster image onClick to route user to details page
    const getDetails = (id) => {
        dispatch({
            type: 'GET_DETAILS',
            payload: id
        });
        history.push('/details');
    };


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movie-list">
                {movies.map(movie => {
                    return (
                        <div className='movie-container' key={movie.id} >
                            <div className='title-container'>
                                <h3 onClick={() => getDetails(movie.id)}>{movie.title}</h3>
                            </div>
                            <div className='image-container'>
                                <img onClick={() => getDetails(movie.id)} src={movie.poster} alt={movie.title} />
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;