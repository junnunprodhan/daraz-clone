import { createSlice } from "@reduxjs/toolkit";

type State = {
  user: User | null;
  loading: boolean;
};
const initialState: State = {
  user: null,
  loading: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(state);
    },
    logout: (state) => {
      console.log("logout");
    },
  },
});

export default userSlice.reducer;
export const { logout, login } = userSlice.actions;
