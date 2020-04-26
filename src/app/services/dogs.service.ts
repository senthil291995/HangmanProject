import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { endpoints } from './../utils/endpoints';

@Injectable({
  providedIn: 'root',
})

export class DogsService {
  constructor(private http: HttpClient) {
  }

  getDogsList(endpoints.getDogsList) {

  }
}
