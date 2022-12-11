import { catchError } from "../utils/helper";
import client from "./client";

export const getAppInfo = async () => {
  try {
    const { data } = await client.get("/admin/app-info");

    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getMostRatedMovies = async () => {
  try {
    const { data } = await client.get("/admin/most-rated");

    return data;
  } catch (error) {
    return catchError(error);
  }
};
