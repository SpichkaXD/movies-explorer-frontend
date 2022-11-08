import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { savedMovies } from "../../utils/constants";

const SavedMovies = () => {
    return (
        <div>
            <SearchForm />
            <MoviesCardList cards={savedMovies} />
        </div>
    );
};

export default SavedMovies;
