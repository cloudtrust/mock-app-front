import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Hospital, Department, Doctor, Patient } from './model';

@Injectable()
export class ServerCommService {

  constructor(private http: HttpClient) { }

  getHospitals() : Observable<Hospital[]> {
    return this.http.get<Hospital[]>('http://localhost:8000/hospitals')
		  .pipe(
        catchError(this.handleError('getHospitals', [])),
        tap(hospitals => {
            console.info(`fetched ${hospitals.length} hospital(s):`)
            hospitals.forEach(h => console.info(h))
          }
        )
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
