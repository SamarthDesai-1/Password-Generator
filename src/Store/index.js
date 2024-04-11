import { configureStore } from "@reduxjs/toolkit";
import passwordGeneratorSlice from "./passwordGeneratorSlice";

const passwordStore = configureStore({
  reducer: {
    password: passwordGeneratorSlice.reducer
  }
});

export default passwordStore;