import client from "../../api/client";

export const getMoviesAPI = (pageNo, limit) => client.get(`/movie/movies?pageNo=${pageNo}&limit=${limit}`);

export const getSingleMovieAPI = (movieId) => client.get(`/movie/single/${movieId}`);

export const getTopRatedMoviesAPI = () => client.get("/movie/top-rated");

