import { beatfilmMoviesURL } from "./constants";

class MoviesApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getMovies() {
        return fetch(`${this._baseUrl}/beatfilm-movies`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // credentials: "include",
            },
        }).then(res => this._handleResponse(res));
    }
}

const moviesApi = new MoviesApi({
    baseUrl: `${ beatfilmMoviesURL }`,
});

export default moviesApi;
