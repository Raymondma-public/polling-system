import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Poll } from '../models/poll';
import { PollResponse } from '../models/poll-response';
@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }

  getAll():Observable<PollResponse>{
      return this.http.get<PollResponse>("http://localhost:3000/polls");
  }
}
