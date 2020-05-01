import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  blogs: any;

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((data) => {
      this.blogs = data;
      console.log(this.blogs);
    });
  }

}
