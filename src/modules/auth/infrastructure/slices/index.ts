import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { UserProfile } from "../../../profile/domain";
import createProfileRepository from "../../../profile/infrastructure/repository";
import { getProfile } from "../../../profile/application";

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
      state.profile = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      if (action.payload) state.profile = action.payload;
    });
  },
});

const profileRepository = createProfileRepository();

// Async Thunks
export const fetchUserInfo = createAsyncThunk("user/fechUserData", async () => {
  try {
    const response = await getProfile(profileRepository)();
    return response;
  } catch {
    console.error("Unable to get profile");
  }
});

export const { reset, signIn, signOut } = AuthSlice.actions;

export default AuthSlice.reducer;
