import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../../../common/Interface/Blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  displayedColumns: string[] = ['id', 'img_thumbnail', 'title', 'short_desc', 'created_at', 'actions'];
  blogs: Blog;

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs() {
    this.blogService.getBlogs().subscribe((data: any) => {
      this.blogs = data.data;
      console.log('Blogssssssssss: ', this.blogs);
    });
  }
}
