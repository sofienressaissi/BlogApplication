import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBlogsComponent } from './components/list-blogs/list-blogs.component';
import { AddNewBlogComponent } from './components/add-new-blog/add-new-blog.component';
import { DetailBlogComponent } from './components/detail-blog/detail-blog.component';

import { BlogService } from './services/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    ListBlogsComponent,
    AddNewBlogComponent,
    DetailBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
