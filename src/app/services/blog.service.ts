import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getListBlogs() {
    return this.http.get(`${environment.fastApiServer}/list-blogs`, this.httpOptions);
  }

  getBlog(blogId: string) {
    return this.http.get(`${environment.fastApiServer}/blog/${blogId}`, this.httpOptions);
  }

  addNewBlog(blog: Blog) {
    return this.http.post(`${environment.fastApiServer}/add-new-blog`, blog, this.httpOptions);
  }

  voteBlog(blogId: string, blog: Blog) {
    return this.http.put(`${environment.fastApiServer}/blog/vote/${blogId}`, blog, this.httpOptions);
  }

}
