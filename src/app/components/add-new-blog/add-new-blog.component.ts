import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-blog',
  templateUrl: './add-new-blog.component.html',
  styleUrls: ['./add-new-blog.component.css']
})
export class AddNewBlogComponent implements OnInit {

  collapsed = true;
  blogForm: FormGroup;
  newBlog;

  constructor(private formBuilder: FormBuilder, private blogService: BlogService,
    private router: Router) { 
    this.blogForm = this.formBuilder.group({
      blogTitle: ['', Validators.required],
      blogAuthor: ['', Validators.required],
      blogContent: ['', Validators.required]
    })
  }

  addNewBlog(): void {

    this.newBlog = {
      blogTitle: this.blogForm.value.blogTitle,
      blogAuthor: this.blogForm.value.blogAuthor,
      blogContent: this.blogForm.value.blogContent,
      numberUpvotes: 0,
      numberDownvotes: 0
    }

    this.blogService.addNewBlog(this.newBlog).subscribe(() => {
      this.blogForm.reset();
      this.router.navigateByUrl("/list-blogs");
    }, error => {
      alert('Error adding blog!');
    })
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  ngOnInit(): void {
  }

}
