import { State } from "./types";
import { initialState as userInitialState } from './User/User.constants'

export const initialState: State = {
  userState: userInitialState,
}