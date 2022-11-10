import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { savedMovies } from "../../utils/constants";

const SavedMovies = () => {
    return (
        <main>
            <SearchForm />
            <MoviesCardList cards={savedMovies} />
        </main>
    );
};

export default SavedMovies;
