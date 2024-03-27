import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Posts } from '../posts';
import { PostsService } from '../../posts.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private postService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  formatData: Posts = {
    id: 0,
    title: '',
    author: '',
    content: '',
    date: new Date('2016-01-17'),
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.postService.edit(id).subscribe((data) => {
      this.formatData = data;
    });
  }

  update() {
    this.postService.update(this.formatData).subscribe({
      next: (data) => {
        this.router.navigateByUrl('/post/home');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
