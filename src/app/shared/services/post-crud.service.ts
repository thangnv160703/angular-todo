import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IPost } from '../interfaces/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostCrudService {
  private httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' }
    )
  };

  constructor(private http: HttpClient) { }

  public getAllPosts(): Observable<IPost[]> {
    const url: string = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<IPost[]>(url);
  }

}
