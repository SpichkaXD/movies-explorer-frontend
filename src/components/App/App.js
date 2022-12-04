import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import "./App.css";

import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import shortsFilter from "../../utils/ShortsFilter";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import useCurrentWidth from "../../hooks/useCurrentWidth";

import {
    SIZE_MOB,
    SIZE_DES,
    SIZE_TAB,
    MOVIES_DES,
    MOVIES_MOB,
    MOVIES_TAB,
    LOAD_TAB_MOB,
    LOAD_DES,
} from "../../utils/constants";



function App() {
    const [renderedMovies, setRenderedMovies] = useState([]);
    const [primaryMovies, setPrimaryMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [countMovies, setCountMovies] = useState(0);
    const [moreMoviesCard, setMoreMoviesCard] = useState(0);
    const [loginError, setLoginError] = useState("");
    const [registerError, setRegisterError] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [profileMessage, setProfileMessage] = useState("");
    const [savedMovies, setSavedMovies] = useState([]);
    const [searchStatus, setSearchStatus] = useState("");
    const [isSearchSuccess, setIsSearchSuccess] = useState(false);
    const [request, setRequest] = useState("");
    const [checkboxStatus, setCheckboxStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [handleShowMore, sethandleShowMore] = useState(false);
    const width = useCurrentWidth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        tokenCheck();
    }, [loggedIn]);

    useEffect(() => {
        if (localStorage.getItem("moviesStorage")) {
            const startingSearch = JSON.parse(localStorage.getItem("moviesStorage"));
            const searchResult = shortsFilter(startingSearch, request, checkboxStatus);
            setFilteredMovies(searchResult);
            setIsSearchSuccess(true);
        }
    }, [checkboxStatus, currentUser, request]);

    useEffect(() => {
        if (loggedIn) {
            mainApi
                .getSavedMovies()
                .then((res) => {
                    const findSavedMovies = res.filter((m) => m.owner._id === currentUser._id);
                    localStorage.setItem("savedMovies", JSON.stringify(findSavedMovies));
                    setSavedMovies(findSavedMovies);
                })
                .catch((err) => console.log(err));
        }
    }, [currentUser._id, loggedIn]);

    const tokenCheck = () => {
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
            mainApi
                .getUserInfo(jwt)
                .then((res) => {
                    if (res) {
                        setLoggedIn(true);
                        setCurrentUser(res);
                        navigate(location);
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    function handleRegister(user) {
        mainApi
            .register(user)
            .then(() => {
                handleLogin({
                    email: user.email,
                    password: user.password,
                });
            })
            .catch((err) => {
                if (err === "Ошибка: 409") {
                    setRegisterError("Пользователь с таким email уже существует");
                }
                if (err === "Ошибка: 500") {
                    setRegisterError("Ошибка сервера");
                } else {
                    setRegisterError("При регистрации пользователя произошла ошибка");
                }
            });
    }

    function handleLogin(user) {
        return mainApi
            .login(user)
            .then((res) => {
                if (res) {
                    localStorage.setItem("jwt", res.token);
                    setLoggedIn(true);
                    navigate("/movies");
                }
            })
            .catch((err) => {
                if (err === "Ошибка: 401") {
                    setLoginError("Неправильный логин или пароль");
                }
                if (err === "Ошибка: 500") {
                    setLoginError("Ошибка сервера");
                } else {
                    setLoginError("При авторизации пользователя произошла ошибка");
                }
            });
    }

    function handleUpdateUser(user) {
        const token = localStorage.getItem("jwt");
        mainApi
            .updateUser(user, token)
            .then((updateUser) => {
                setLoggedIn(true);
                setCurrentUser(updateUser);
                localStorage.setItem("name", updateUser.name);
                localStorage.setItem("email", updateUser.email);
                setProfileMessage("Профиль успешно обновлен!");
            })
            .catch((err) => {
                if (err === "Ошибка: 409") {
                    setProfileMessage("Пользователь с таким email уже существует");
                } else {
                    setProfileMessage("При обновлении профиля произошла ошибка");
                }
            });
    }

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
        console.log(localStorage, "localstorage");
    };

    function startLoading() {
        setLoading(true);
        setTimeout(() => setLoading(false), 700);
    }

    function handleSearchMovie(request, checkboxStatus) {
        startLoading();
        setRenderedMovies([]);
        setRequest(request);
        setCheckboxStatus(checkboxStatus);

        const moviesInLocalStorage = JSON.parse(localStorage.getItem("initialMovies"));

        if (!moviesInLocalStorage) {
            setLoading(true);
            moviesApi
                .getMovies()
                .then((movies) => {
                    setPrimaryMovies(movies);
                    localStorage.setItem("initialMovies", JSON.stringify(movies));
                })
                .catch(() => {
                    setSearchStatus(
                        "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
                    );
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setPrimaryMovies(moviesInLocalStorage);
        }
    }

    useEffect(() => {
        if (primaryMovies.length > 0) {
            const moviesStorage = shortsFilter(primaryMovies, request, checkboxStatus);
            localStorage.setItem("moviesStorage", JSON.stringify(moviesStorage));
            localStorage.setItem("request", request);
            localStorage.setItem("checkboxStatus", checkboxStatus);
            setFilteredMovies(moviesStorage);
            setIsSearchSuccess(true);
        }
    }, [primaryMovies, request, checkboxStatus]);

    useEffect(() => {
        if (renderedMovies.length === filteredMovies.length) {
            sethandleShowMore(false);
        }
    }, [renderedMovies, filteredMovies]);

    function handleSaveMovie(movie) {
        mainApi
            .addsaveMovie(movie)
            .then((res) => {
                const updatedSavedMovies = [...savedMovies, { ...res, id: res.movieId }];
                setSavedMovies(updatedSavedMovies);
                localStorage.setItem("savedMovies", JSON.stringify(updatedSavedMovies));
            })
            .catch((err) => console.log(err));
    }

    function handleDeleteMovie(movie) {
        mainApi
            .deleteMovie(movie._id)
            .then(() => {
                const updatedSavedMovies = savedMovies.filter((m) => m._id !== movie._id);
                setSavedMovies(updatedSavedMovies);
                localStorage.setItem("savedMovies", JSON.stringify(updatedSavedMovies));
            })
            .catch((err) => console.log(err));
    }


    useEffect(() => {
        if (width <= SIZE_MOB) {
            setCountMovies(MOVIES_MOB);
            setMoreMoviesCard(LOAD_TAB_MOB);
        } else if (width <= SIZE_TAB) {
            setCountMovies(MOVIES_TAB);
            setMoreMoviesCard(LOAD_TAB_MOB);
        } else if (width > SIZE_DES) {
            setCountMovies(MOVIES_DES);
            setMoreMoviesCard(LOAD_DES);
        }
    }, [width]);

    useEffect(() => {
        if (filteredMovies.length > 0) {
            if (filteredMovies.length > countMovies) {
                setRenderedMovies(filteredMovies.slice(0, countMovies));
                sethandleShowMore(true);
            } else {
                setRenderedMovies(filteredMovies);
            }
        }
    }, [filteredMovies, countMovies]);

    function renderMovies() {
        setRenderedMovies((previousCount) => filteredMovies.slice(0, previousCount.length + moreMoviesCard));
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                <Routes>
                    <Route
                        path={"/"}
                        element={
                            <>
                                <Header loggedIn={loggedIn} />
                                <Main />
                                <Footer />
                            </>
                        }
                    ></Route>

                    <Route
                        exact
                        path="/signup"
                        element={
                            <>
                                <Register onRegister={handleRegister} registerError={registerError} />
                            </>
                        }
                    />

                    <Route
                        exact
                        path="/signin"
                        element={
                            <>
                                <Login onLogin={handleLogin} loginError={loginError} />
                            </>
                        }
                    />

                    <Route
                        path={"/movies"}
                        element={
                            <ProtectedRoute loggedIn={loggedIn}>
                                <>
                                    <Header loggedIn={loggedIn} />
                                    <Movies
                                        loggedIn={loggedIn}
                                        handleSearchSubmit={handleSearchMovie}
                                        loading={loading}
                                        isSearchSuccess={isSearchSuccess}
                                        searchStatus={searchStatus}
                                        renderedMovies={renderedMovies}
                                        savedMovies={savedMovies}
                                        onAddMovie={handleSaveMovie}
                                        onDeleteMovie={handleDeleteMovie}
                                        handleShowMore={handleShowMore}
                                        onRenderMovies={renderMovies}
                                    />
                                    <Footer />
                                </>
                            </ProtectedRoute>
                        }
                    ></Route>

                    <Route
                        path={"/saved-movies"}
                        element={
                            <ProtectedRoute loggedIn={loggedIn}>
                                <>
                                    <Header loggedIn={loggedIn} />
                                    <SavedMovies
                                        loggedIn={loggedIn}
                                        savedMovies={savedMovies}
                                        onDeleteMovie={handleDeleteMovie}
                                    />
                                    <Footer />
                                </>
                            </ProtectedRoute>
                        }
                    ></Route>

                    <Route
                        path={"/profile"}
                        element={
                            <ProtectedRoute loggedIn={loggedIn}>
                                <>
                                    <Header loggedIn={loggedIn} />
                                    <Profile
                                        loggedIn={loggedIn}
                                        onUpdateUser={handleUpdateUser}
                                        profileMessage={profileMessage}
                                        onSignOut={handleLogout}
                                    />
                                </>
                            </ProtectedRoute>
                        }
                    ></Route>

                    <Route
                        path={"*"}
                        element={
                            <>
                                <PageNotFound />
                            </>
                        }
                    ></Route>
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
