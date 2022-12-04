import { MAIN_LINK } from './constants';

class MainApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    get _headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("jwt")}`,
        }
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }
    
    login = ({ email, password }) => {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ email, password })
        })
            .then(this._handleResponse)
    }

    register = ({ name, email, password }) => {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
            .then(this._handleResponse)
    }

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: this._headers,
        })
            .then(this._handleResponse)
    }

    addsaveMovie(data) {
        return fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(data)
        })
            .then(this._handleResponse)
    }

    deleteMovie(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(this._handleResponse)
    }

    getUserInfo = () => {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers,
        })
            .then(this._handleResponse)
    }

    updateUser({ name, email }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({ name, email })
        })
            .then(this._handleResponse)
    }
}

const mainApi = new MainApi({
    baseUrl: `${MAIN_LINK}`,
});

export default mainApi;