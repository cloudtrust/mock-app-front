import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Hospital, Department, Doctor, Patient } from './model';

@Injectable()
export class ServerCommService {

  backend = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getHospitals() : Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.backend + '/hospitals')
		  .pipe(
        catchError(this.handleError('getHospitals', []))
      );
  }

  getDepartments() : Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.backend + '/departments')
		  .pipe(
        catchError(this.handleError('getDepartments', []))
      );
  }

  getDoctors() : Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.backend + '/doctors')
		  .pipe(
        catchError(this.handleError('getDoctors', []))
      );
  }

  getPatients() : Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.backend + '/patients')
		  .pipe(
        catchError(this.handleError('getPatients', []))
      );
  }

  getMedicalFiles() : Observable<Hospital[]> {
    return this.http.get<Hospital[]>(this.backend + '/files')
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
