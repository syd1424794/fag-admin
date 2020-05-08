import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogService } from './blog.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogListComponent, BlogSingleComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  providers: [BlogService]
})
export class BlogModule { }
