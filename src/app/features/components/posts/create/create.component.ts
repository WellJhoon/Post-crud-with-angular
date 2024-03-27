import { Component } from '@angular/core';
import { Posts } from '../posts';
import { PostsService } from '../../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  constructor(private postService: PostsService, private router: Router) {}
  formatData: Posts = {
    id: 0,
    title: '',
    author: '',
    content: '',
    date: new Date('2016-01-17'),
  };

  create() {
    this.postService.create(this.formatData).subscribe({
      next: (data) => {
        this.router.navigateByUrl('/post/home');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
