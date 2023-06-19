import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "selectedUser",
  initialState: {
    img: "https://photosfile.com/wp-content/uploads/2022/07/Cartoon-DP-Boy-2.jpeg",
  },
  reducers: {
    changeImage(state, action) {
      console.log("ok", action.payload);
      state.img = action.payload;
      console.log("ME", state);
    },
    // ,
    // todoToggled(state, action) {
    // const todo = state.find(todo => todo.id === action.payload)
    // todo.completed = !todo.completed
    // }
  },
});

export const { changeImage } = userDataSlice.actions;
export default userDataSlice.reducer;
