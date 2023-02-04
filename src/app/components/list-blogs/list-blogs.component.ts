import { Blog } from './../../models/blog.model';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.css']
})
export class ListBlogsComponent implements OnInit {

  collapsed = true;
  listBlogs: Blog[] = [];
  blogUpdated: Blog;
  searchTerm: string;

  constructor(private blogService: BlogService) { }

  getListBlogs() {
    this.blogService.getListBlogs().subscribe((blogs: Blog[]) => {
      this.listBlogs = blogs;
      for (let b = 0; b < this.listBlogs.length; b++) {
        if (this.listBlogs[b].numberUpvotes > this.listBlogs[b].numberDownvotes) {
          this.listBlogs[b].borderState = "border-success"
        } else if (this.listBlogs[b].numberUpvotes < this.listBlogs[b].numberDownvotes) {
          this.listBlogs[b].borderState = "border-danger"
        } else {
          this.listBlogs[b].borderState = ""
        }
      }
    }, error => {
      alert("Error finding blogs!");
    })
  }

  upvoteBlog(oldBlog: Blog): void {
    oldBlog.numberUpvotes = oldBlog.numberUpvotes + 1;
    this.blogService.voteBlog(oldBlog.id, oldBlog).subscribe((blog: Blog) => {
      this.blogUpdated = blog;
      if (this.blogUpdated.numberUpvotes > this.blogUpdated.numberDownvotes) {
        oldBlog.borderState = "border-success";
      } else if (this.blogUpdated.numberUpvotes < this.blogUpdated.numberDownvotes) {
        oldBlog.borderState = "border-danger";
      } else {
        oldBlog.borderState = "";
      }
    }, error => {
      alert("Error upvoting!");
    })
  }

  downvoteBlog(oldBlog: Blog): void {
    oldBlog.numberDownvotes = oldBlog.numberDownvotes + 1;
    this.blogService.voteBlog(oldBlog.id, oldBlog).subscribe((blog: Blog) => {
      this.blogUpdated = blog;
      if (this.blogUpdated.numberUpvotes < this.blogUpdated.numberDownvotes) {
        oldBlog.borderState = "border-danger";
      } else if (this.blogUpdated.numberUpvotes < this.blogUpdated.numberDownvotes) {
        oldBlog.borderState = "border-success";
      } else {
        oldBlog.borderState = "";
      }
    }, error => {
      alert("Error downvoting!");
    })
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  ngOnInit(): void {
    this.getListBlogs();
    this.searchTerm = '';
  }

}
