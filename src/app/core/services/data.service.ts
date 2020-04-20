import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ITraceable} from '../../shared/interfaces';

@Injectable()
export class DataService {

    port = '4200';
    baseUrl = `${this.window.location.protocol}//${this.window.location.hostname}:${this.port}`;
    traceableSvcBaseUrl = this.baseUrl + '/assets/ATL_01.json';

    constructor(private http: HttpClient, @Inject('Window') private window: Window) { 

    }


    getTraceableEntities(): Observable<ITraceable[]> {
        return this.http.get<ITraceable[]>(this.traceableSvcBaseUrl)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || ' server error');
    }

}