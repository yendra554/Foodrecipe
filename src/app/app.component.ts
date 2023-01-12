import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Post } from './services/interface/post.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 storedPosts: Post[] =[];

 constructor(private authService: AuthService){}
  onPostAdded(post){

    this.storedPosts.push(post);
  }

  ngOnInit() {
   this.authService.autoAuthUser();
  }
}
