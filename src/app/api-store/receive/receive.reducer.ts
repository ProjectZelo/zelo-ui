import { createReducer, on, Action } from "@ngrx/store";
import * as fromActions from './receive.actions';

export const SLICE_ID_RECEIVE = 'Receive';

export interface ReceiveGetState {
    response: any;
    error: any;

}

export const initialState: ReceiveGetState = {
    response: undefined,
    error: undefined
}

const ReceiveStateReducer = createReducer(
    initialState,
    on(
        fromActions.ReceiveGetRequest,
        (state) => ({
            ...state, error: undefined, errorGetGoals: false
        })
    ),
    on(
        fromActions.ReceiveGetResponse,
        (state, { response }) => ({
            ...state, response, error: undefined, errorGetGoals: false
        })
    ),
    on(
        fromActions.ReceiveGetError,
        (state, { error }) => ({
            ...state, error,  response: undefined, errorGetGoals: false
        })
    )


);

export function reducer(state: ReceiveGetState | undefined, action: Action) {
    return ReceiveStateReducer(state, action);
}