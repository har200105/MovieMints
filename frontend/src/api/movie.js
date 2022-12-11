import { catchError, getToken } from "../utils/helper";
import client from "./client";

export const uploadTrailer = async (formData, onUploadProgress) => {
  try {
    const { data } = await client.post("/movie/upload-trailer", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
      onUploadProgress: ({ loaded, total }) => {
        if (onUploadProgress) {
          onUploadProgress(Math.floor((loaded / total) * 100));
        }
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const uploadMovie = async (formData) => {
  try {
    const { data } = await client.post("/movie/create", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getMovieForUpdate = async (id) => {
  try {
    const { data } = await client.get("/movie/for-update/" + id, {
      headers: {
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getMovies = async (pageNo, limit) => {
  try {
    const { data } = await client.get(
      `/movie/movies?pageNo=${pageNo}&limit=${limit}`,
      {
        headers: {

          "content-type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const updateMovie = async (id, formData) => {
  try {
    const { data } = await client.patch("/movie/update/" + id, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const deleteMovie = async (id) => {
  try {
    const { data } = await client.delete(`/movie/${id}`, {
      headers: {
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const searchMovieForAdmin = async (title) => {
  try {
    const { data } = await client.get(`/movie/search?title=${title}`, {
      headers: {
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getTopRatedMovies = async (type, signal) => {
  try {
    let endpoint = "/movie/top-rated";
    if (type) {
      endpoint = endpoint + "?type=" + type;
    }

    const { data } = await client.get(endpoint, { signal });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getLatestUploads = async (signal) => {
  try {
    const { data } = await client.get("/movie/latest-uploads", { signal });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getSingleMovie = async (id) => {
  try {
    const { data } = await client.get("/movie/single/" + id);
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getRelatedMovies = async (id) => {
  try {
    const { data } = await client.get("/movie/related/" + id);
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const searchPublicMovies = async (title) => {
  try {
    const { data } = await client.get("/movie/search-public?title=" + title);
    return data;
  } catch (error) {
    return catchError(error);
  }
};
