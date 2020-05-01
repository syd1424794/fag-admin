import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogService } from './blog.service';


@NgModule({
  declarations: [BlogListComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  providers: [BlogService]
})
export class BlogModule { }
