import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export type ZeloMockApiReplyCallback =
    | ((data: { request: HttpRequest<any>; urlParams: { [key: string]: string } }) => ([number, string | any]) | Observable<any>)
    | undefined;

export type ZeloMockApiMethods =
    | 'get'
    | 'post'
    | 'put'
    | 'patch'
    | 'delete';
