import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../lib/environment';

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs() {
    return this.http.get(`${environment.apiUrl}blogs/all`);
  }
}
