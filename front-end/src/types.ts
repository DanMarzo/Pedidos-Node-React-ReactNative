import { StateAuth } from "./features/auth/auth.schema";
import { StateDashboard } from "./features/dashboard/dashboard.schema";

export interface State {
  auth: StateAuth;
  dashboard: StateDashboard;
}
