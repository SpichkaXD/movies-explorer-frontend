import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = (props) => {
    const cards = props.cards;
    return (
        <section className="movies-cardlist__border">
            <ul className="movies-cardlist">
                {cards.map((card) => (
                    <MoviesCard card={card} key={card._id} />
                ))}
            </ul>
            <button type="button" className="movies-cardlist__button">Ещё</button>
        </section>
    );
};

export default MoviesCardList;
