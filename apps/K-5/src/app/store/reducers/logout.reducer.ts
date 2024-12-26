import { ActionReducer, MetaReducer } from '@ngrx/store';
 
import { authActions } from '../actions/login.action';
 
export function clearState(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action.type === authActions.logout.type) {
      state = undefined;
    }
    return reducer(state, action);
  };
}
 
export const metaReducers: MetaReducer<any>[] = [clearState];