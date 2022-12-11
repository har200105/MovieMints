import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";

import {getTopRatedMoviesAction} from "../../redux/reducers/movie";

const TopRatedMovies = () => {
  const { movieData } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRatedMoviesAction());
  }, [dispatch]);

  return (<>
    {<MovieList movies={movieData} title="Viewers choice (Movies)" />}
    </>
  );
}

export default TopRatedMovies;