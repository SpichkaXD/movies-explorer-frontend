import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { movies } from "../../utils/constants";

const Movies = () => {
    return (
        <main>
            <SearchForm />
            <Preloader />
            <MoviesCardList cards={movies} />
        </main>
    );
};

export default Movies;
