import { createSelector } from "@reduxjs/toolkit";
import { State } from "../../types";

const auth = (state: State) => state.auth;

const userProps = createSelector(
  auth,
  (feature) => feature.userProps
);

export { userProps };