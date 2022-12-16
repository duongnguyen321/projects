import { configureStore } from "@reduxjs/toolkit";
import { playerReducer } from "../../Components/Player/playerSlice";
import { authReducer } from "../../Pages/Auth/authSlice";

const rootReducer = {
  player: playerReducer,
  auth: authReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
