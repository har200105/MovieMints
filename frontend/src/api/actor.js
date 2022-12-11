import { catchError, getToken } from "../utils/helper";
import client from "./client";

export const createActor = async (formData) => {
  try {
    const { data } = await client.post("/actor/create", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const searchActor = async (query) => {
  try {
    const { data } = await client.get(`/actor/search?name=${query}`);
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const updateActor = async (id, formData) => {
  try {
    const { data } = await client.post("/actor/update/" + id, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const deleteActor = async (id) => {
  try {
    const { data } = await client.delete("/actor/" + id, {
      headers: {
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getActors = async (pageNo, limit) => {
  try {
    const { data } = await client.get(
      `/actor/actors?pageNo=${pageNo}&limit=${limit}`,
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

export const getActorProfile = async (id) => {
  try {
    const { data } = await client.get(`/actor/single/${id}`);
    return data;
  } catch (error) {
    return catchError(error);
  }
};
