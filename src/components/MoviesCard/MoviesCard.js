import React from "react";
import { useLocation } from "react-router-dom";

import "./MoviesCard.css";
import saveButton from "../../images/saveButton.svg";
import notSaveButton from "../../images/notSaveButton.svg";
import deleteFilmButton from "../../images/deleteFilmButton.svg";

import { beatfilmMoviesURL } from "../../utils/constants";

const MoviesCard = ({ movie, savedMovies, onAddMovie, onDeleteMovie }) => {
    const location = useLocation();
    const savedMovie = savedMovies.find((m) => m.movieId === movie.id);

    const isSaved = movie.id ? savedMovie : location.pathname === "/saved-movies";

    function onClickLink(url) {
        return () => window.open(url, "_blank", "noopener noreferrer");
    }

    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration % 60;

    function handleDeleteMovie() {
        onDeleteMovie(movie);
    }

    function handleSaveMovie() {
        if (!savedMovie) {
            onAddMovie ({
                country: String(movie.country),
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `${beatfilmMoviesURL}${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `${beatfilmMoviesURL}${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            });
        } else {
            onDeleteMovie(savedMovies.filter((m) => m.movieId === movie.id)[0]);
        }
    }

    return (
        <li className="moviesCard">
            <a className="moviesCard__link" href={movie.trailerLink} onClick={onClickLink}>
                <img
                    className="moviesCard__poster"
                    src={typeof movie.image === "string" ? movie.image : `${beatfilmMoviesURL}${movie.image.url}`}
                    alt={`Постер фильма ${movie.nameRU}`}
                />
            </a>
            <div className="moviesCard__container">
                <h2 className="moviesCard__title">{movie.nameRU}</h2>

                {location.pathname === "/saved-movies" && (
                    <button
                        type="button"
                        aria-label="удалить фильм"
                        className={isSaved ? "moviesCard__button" : "moviesCard__button"}
                        onClick={handleDeleteMovie}
                    >
                        {isSaved ? <img className="moviesCard__click" alt="удалить" src={deleteFilmButton} /> : ""}
                    </button>
                )}

                {location.pathname === "/movies" && (
                    <button
                        type="button"
                        aria-label="сохранить"
                        className={isSaved ? "moviesCard__button" : "moviesCard__button"}
                        onClick={handleSaveMovie}
                    >
                        {isSaved ? (
                            <img className="moviesCard__click" alt="добавлено" src={saveButton} />
                        ) : (
                            <img className="moviesCard__add" alt="добавить" src={notSaveButton} />
                        )}
                    </button>
                )}
            </div>

            <p className="moviesCard__duration">
                {hours !== 0 ? `${hours}ч` : ""} {minutes !== 0 ? `${minutes}м` : ""}
            </p>
        </li>
    );
};

export default MoviesCard;
