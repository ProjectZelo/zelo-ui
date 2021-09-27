import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, switchMap, map } from "rxjs/operators";
import { ApiService } from "../services/api.service";
import * as fromActions from './receive.actions';

@Injectable()
export class ReceiveGetEffects {
    constructor(private readonly actions$: Actions, private readonly apiService: ApiService) {}

    ReceiveGet$ = createEffect(() => 
    this.actions$
    .pipe(
        ofType(fromActions.ReceiveGetRequest),
        switchMap(data => this.apiService.recieveGetCall(data.cc)
        .pipe(
            map((response: any) => {
                return fromActions.ReceiveGetResponse({response});
            }),
            catchError((error: HttpErrorResponse) => {
                const err = error.error ? error.error : error;
                return of(fromActions.ReceiveGetError({error: err}));
            })
        )
        )
    )
    );
}