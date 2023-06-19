import { createSlice } from "@reduxjs/toolkit";

const selectedUserSlice = createSlice({
  name: "selectedUser",
  initialState: [],
  reducers: {
    userAdded(state, action) {
      console.log("ok", action.payload);
      state.push({
        id:action.payload.id,
        img: action.payload.img,
        age: action.payload.age,
        name: action.payload.name,
        city: action.payload.city,
      });
      console.log("ME", state);
    },
    // ,
    // todoToggled(state, action) {
    // const todo = state.find(todo => todo.id === action.payload)
    // todo.completed = !todo.completed
    // }
  },
});

export const { userAdded } = selectedUserSlice.actions;
export default selectedUserSlice.reducer;
