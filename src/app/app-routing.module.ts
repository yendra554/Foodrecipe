import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreatedComponent } from './posts/post-created/post-created/post-created.component';
import { PostListComponent } from './posts/post-list/post-list/post-list.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create', component: PostCreatedComponent , canActivate: [AuthGuard]},
  { path: 'edit/:postId', component: PostCreatedComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule {}
