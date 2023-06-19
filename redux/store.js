import { configureStore } from "@reduxjs/toolkit";
import selectedUserSlice from "./reducers/selectedUsersSlice";
import userDataSlice from "./reducers/userDataSlice";

export const Store = configureStore({
  reducer: {
    selectedUser: selectedUserSlice,
    userData: userDataSlice,
  },
});
