import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserProfile } from "../../domain";
import { getProfile } from "../../application";
import createAuthRepository from "../repository";

interface AuthState {
  isLogged: boolean;
  profile?: UserProfile;
}

const initialState: AuthState = {
  isLogged: false,
  profile: undefined,
};

// Slice
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    signIn: (state) => {
      state.isLogged = true;
    },
    signOut: (state) => {
      state.isLogged = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        if (action.payload) state.profile = action.payload;
      })
      .addCase(fetchLogoutUser.fulfilled, (state) => {
        state.profile = undefined;
        state.isLogged = false;
      });
  },
});

const authRepository = createAuthRepository();

// Async Thunks
export const fetchUserInfo = createAsyncThunk("user/fechUserData", async () => {
  try {
    const response = await getProfile(authRepository)();
    return response;
  } catch {
    //Unable to get user Info
    console.error("Unable to get profile");
  }
});

export const fetchLogoutUser = createAsyncThunk(
  "user/fechLogoutUser",
  async () => {
    try {
      console.log("Log ~ response:");
    } catch {
      console.error("Unable to logout");
    }
  }
);

// Selectors
export const selectIsLogged = (state: { Auth: AuthState }) =>
  state.Auth.isLogged;
export const selectProfile = (state: { Auth: AuthState }) => state.Auth.profile;

export const { reset, signIn, signOut } = AuthSlice.actions;

export default AuthSlice.reducer;
