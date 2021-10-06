import { createAction, props } from "@ngrx/store";

export const ReceiveActionTypes = {
    ReceiveGetRequest: '[Receive] Receive Get Request',
    ReceiveGetResponse: '[Receive] Receive Get Response',
    ReceiveGetError: '[Receive] Receive Get Error'
};

export const ReceiveGetRequest = createAction(
    ReceiveActionTypes.ReceiveGetRequest,
    props<{cc: number;}>()
);

export const ReceiveGetResponse = createAction(
    ReceiveActionTypes.ReceiveGetResponse,
    props<{response: any;}>()
);

export const ReceiveGetError = createAction(
    ReceiveActionTypes.ReceiveGetError,
    props<{error: any;}>()
);
