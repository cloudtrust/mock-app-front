import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ServerCommService {

  backend = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getHospitals() : Observable<Object[]> {
    return this.http.get<Object[]>(this.backend + '/hospitals')
		  .pipe(
        catchError(this.handleError('getHospitals', []))
      );
  }

  getDepartments() : Observable<Object[]> {
    return this.http.get<Object[]>(this.backend + '/departments')
      .map(response => {
        response.map(e => e["hospital"] = e["hospital"]["id"]);
        return response;
      })
		  .pipe(
        catchError(this.handleError('getDepartments', []))
      );
  }

  getDoctors() : Observable<Object[]> {
    return this.http.get<Object[]>(this.backend + '/doctors')
      .map(response => {
        response.map(e => e["departments"] = e["departments"][0]["id"]);
        return response;
      })
		  .pipe(
        catchError(this.handleError('getDoctors', []))
      );
  }

  getPatients() : Observable<Object[]> {
    return this.http.get<Object[]>(this.backend + '/patients')
      .map(response => {
        response.map(e => e["birthDate"] = e["birthDate"].substring(0,10));
        return response;
      })
		  .pipe(
        catchError(this.handleError('getPatients', []))
      );
  }

  getMedicalFiles() : Observable<Object[]> {
    return this.http.get<Object[]>(this.backend + '/files')
		  .pipe(
        catchError(this.handleError('getMedicalFiles', []))
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
