import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMoviesService, getSingleMovieService, getTopRatedMoviesService } from "../services/dataService";


const initialState = {
    loading:false,
    movieData: [],
};

export const getMoviesAction = createAsyncThunk("get/movies", async (pageNo,limit) => {
    const response = await getMoviesService(pageNo,limit);
    if (response?.error) {
            return { error: response?.error };
    }
    return response;
});

export const getSingleMovieAction = createAsyncThunk("get/single-movie", async (movieId) => {
    const response = await getSingleMovieService(movieId);
    if (response?.error) {
        return { error: response?.error };
    }
    return response;
});

export const getTopRatedMoviesAction = createAsyncThunk("get/getTopRatedMovies", async () => {
    const response = await getTopRatedMoviesService();
    if (response?.error) {
        return {
            error: response?.error
        };
    }
    return response;
});

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getTopRatedMoviesAction.pending]: (state, action) => {
            state.loading = true;
        },
        [getTopRatedMoviesAction.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.movieData = action.payload?.movies;
        },
    }
});


export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
