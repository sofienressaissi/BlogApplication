import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {

  collapsed = true;
  blogToGet: Blog;

  constructor(private blogService: BlogService, private router: Router) { }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  ngOnInit(): void {
    this.blogService.getBlog(this.router.url.replace("/blog/", "")).subscribe((blog: Blog) => {
      this.blogToGet = blog;
    }, error => {
      alert("Error getting blog!");
    })
  }

}
