import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allPost: Posts[] = [];
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getAll().subscribe((data) => {
      this.allPost = data;
    });
  }
}
