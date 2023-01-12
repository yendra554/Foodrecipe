import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material.module";
import { PostCreatedComponent } from './post-created/post-created/post-created.component';
import { PostListComponent } from './post-list/post-list/post-list.component';
import { PostIngredientsComponent } from './post-ingredients/post-ingredients.component';


@NgModule({
  declarations: [
    PostCreatedComponent,
    PostListComponent,
    PostIngredientsComponent,

  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class PostsModule{

}
