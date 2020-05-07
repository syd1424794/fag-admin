import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogService } from './blog.service';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [BlogListComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatTableModule
  ],
  providers: [BlogService]
})
export class BlogModule { }
