import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DialogflowService {

  private baseURL: string = "https://dialogflow.clients6.google.com/v2/projects/testwasim-wdtt/agent/sessions/27e870ad-6d8d-1ebb-567a-acf888d5b2d3:detectIntent";

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
    headers.Authorization = 'Bearer ya29.a0AfH6SMDmtGW8EXEwq2A5uGDp1TVgfCGBldYDMXBo4mHBS-jpc52rFXEXKDufwuV_p8OhnSH0hKIRs319UvXmZEGPizSL57rYSh6uHDyIJmsp2ZsuVH8AZTjHbyt0w9k2I3KLXasT9DlBfHzktYx5yI61D3XPbbUbDwr_rng-TXeU3lIIYJQxFUjVbN--YG8akxcYqq5_0bxIR0U2gGLAO1zKcZR33FyyAQHMAlsteyvNLvI';
    return this.http.post(this.baseURL, postRequest, {headers: headers});
  }

}
