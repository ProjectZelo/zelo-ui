import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromReducer from './receive.reducer'

export const receiveSliceState = createFeatureSelector<fromReducer.ReceiveGetState>(fromReducer.SLICE_ID_RECEIVE);

export const getReceiveResponseState = createSelector(
    receiveSliceState,
    state => state && state.response
);

export const getReceiveErrorState = createSelector(
    receiveSliceState,
    state => state && state.error
);