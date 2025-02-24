import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface AuthUserState {
  id: string;
  name: string;
  permissions: string[];
  roles: string[];
}

// Define the initial state using that type
const initialState: AuthUserState = {
  id: "",
  name: "",
  permissions: [""],
  roles: [""],
};

export const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    signin: (state, action: PayloadAction<AuthUserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.id;
      state.permissions = action.payload.permissions;
      state.roles = action.payload.roles;
    },
    signout: () => {
      return initialState;
    },
  },
});

export const { signin, signout } = authUserSlice.actions;

export default authUserSlice.reducer;
