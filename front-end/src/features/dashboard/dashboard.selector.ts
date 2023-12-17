import { createSelector } from "@reduxjs/toolkit";
import { State } from "../../types";

const dashboard = (state: State) => state.dashboard;

const selectOrderId = createSelector(
    dashboard,
    (feature) => feature.orderId
);

export { selectOrderId };