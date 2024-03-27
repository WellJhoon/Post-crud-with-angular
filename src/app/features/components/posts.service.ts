import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from './posts/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Posts[]>('http://localhost:3000/posts');
  }
  create(data: Posts) {
    return this.httpClient.post('http://localhost:3000/posts', data);
  }
  edit(id: number) {
    return this.httpClient.get<Posts>(`http://localhost:3000/posts/${id}`);
  }
  update(data: Posts) {
    return this.httpClient.put<Posts>(
      `http://localhost:3000/posts/${data.id}`,
      data
    );
  }
}
