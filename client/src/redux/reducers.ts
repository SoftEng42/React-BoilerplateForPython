import { State, Action } from './types'

const initialState: State = {
}

export function rootReducer(state: State = initialState, action: Action): State {
 
  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}
