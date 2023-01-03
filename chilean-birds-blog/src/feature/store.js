import { configureStore } from "@reduxjs/toolkit";
import birdSlice from "./birdSlice.js";

export default configureStore({
  reducer: {
    counter: birdSlice,
  },
});
