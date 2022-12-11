import { getMoviesAPI, getSingleMovieAPI, getTopRatedMoviesAPI } from "../api/movie";

export const getMoviesService = async (pageNo,limit) => {
    const response = await getMoviesAPI(pageNo,limit);
    if (response?.data) {
        return response?.data;
    } else {
        return null;
    }
};

export const getSingleMovieService = async (movieId) => {
    const response = await getSingleMovieAPI(movieId);
    if (response?.data) {
        return response?.data;
    } else {
        return null;
    }
}

export const getTopRatedMoviesService = async () => {
    const response = await getTopRatedMoviesAPI();
    if (response?.data) {
        return response?.data;
    } else {
        return null;
    }
}