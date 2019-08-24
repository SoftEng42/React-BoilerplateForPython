import { UserAction, UserState } from "./User/User.types";

export interface State {
  userState: UserState
}

export type Action = UserAction

