import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DialogflowService {

  private baseURL: string = "https://dialogflow.clients6.google.com/v2/projects/#ProjectName/agent/sessions/#SESSION_ID";

  constructor(private http: HttpClient){}

  public getResponse(query: string): Observable<any> {
    let postRequest = {
      "query_input": {
        "text": {
          "text": query,
          "language_code": "en-US"
        }
      }
    };
    const headers: { [name: string]: string } = {};
    headers.Authorization = 'Bearer #Auth';
    return this.http.post(this.baseURL, postRequest, {headers: headers});
  }

}
