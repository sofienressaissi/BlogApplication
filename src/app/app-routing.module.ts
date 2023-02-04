import { DetailBlogComponent } from './components/detail-blog/detail-blog.component';
import { AddNewBlogComponent } from './components/add-new-blog/add-new-blog.component';
import { ListBlogsComponent } from './components/list-blogs/list-blogs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/list-blogs', pathMatch: 'full'}, //pathMatch: 'full" => Default route
  { path: 'list-blogs', component: ListBlogsComponent },
  { path: 'add-new-blog', component: AddNewBlogComponent },
  { path: 'blog/:blogId', component: DetailBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
