import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from 'src/app/common/Interface/Blog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit {

  blog: Blog;
  blogId: number;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogId = this.route.snapshot.params.id;
    // alert(this.blogId);
    this.getSingleBlog(this.blogId);
  }

  getSingleBlog(id: number) {
    this.blogService.getSingleBlog(id).subscribe((data: any) => {
      this.blog = data.data;
      console.log('Single Blog: ', this.blog);
    });
  }

}
