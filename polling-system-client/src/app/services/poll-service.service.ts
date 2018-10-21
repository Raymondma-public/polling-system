import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poll } from '../models/poll';
import { PollResponse } from '../models/poll-response';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PollResponse> {
    return this.http.get<PollResponse>(environment.getAPI("polls"));
  }

  postPollResponse(pollId, optionLabel): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    //  const options = new RequestOptions({ headers: headers });
    const params = new URLSearchParams();
    params.append('id', pollId);
    params.append('option', optionLabel);
    const p = { id: pollId, option: optionLabel };
    return this.http.post(environment.getAPI("polls"), { headers, params: p });
  }
}
