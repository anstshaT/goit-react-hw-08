import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", body);
      console.log("Signup", data);

      if (!data.token) {
        return thunkAPI.rejectWithValue("No token available");
      }

      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  "auth/login",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", body);
      console.log("Login token:", data.token);

      if (!data.token) {
        return thunkAPI.rejectWithValue("No token available");
      }

      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/users/logout");
      clearAuthHeader();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    console.log(savedToken);

    if (savedToken === null) {
      return thunkAPI.rejectWithValue("Token is not exist");
    }

    try {
      setAuthHeader(savedToken);
      const { data } = await axios.get("/users/current");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
