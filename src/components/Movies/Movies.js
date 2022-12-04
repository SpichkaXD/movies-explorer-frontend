import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './Movies.css';

function Movies({
    handleSearchSubmit,
    loading,
    isSearchSuccess,
    searchStatus,
    renderedMovies,
    savedMovies,
    onAddMovie,
    onDeleteMovie,
    handleShowMore,
    onRenderMovies,
}) {

    return (
        <main className='movies'>
            <SearchForm
                handleSearchSubmit={handleSearchSubmit} />
            {loading ?
                <div className="movies__preloader">
                    <Preloader />
                </div>
                : isSearchSuccess
                    ? renderedMovies.length > 0
                        ? <MoviesCardList
                            movies={renderedMovies}
                            savedMovies={savedMovies}
                            onAddMovie={onAddMovie}
                            onDeleteMovie={onDeleteMovie}
                            loading={loading}
                            isSearchSuccess={isSearchSuccess}
                            onRenderMovies={onRenderMovies}
                            handleShowMore={handleShowMore}
                        />
                        : (!loading ?
                            <div className="movies__container">
                                <span className="movies__text">Ничего не найдено</span>
                            </div>
                            :
                            <div className="movies__container">
                                <span className="movies__text">{searchStatus}</span>
                            </div>
                        )
                    : ("")
            }
        </main>

    );
}

export default Movies;