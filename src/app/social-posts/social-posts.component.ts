import { Component, OnInit } from '@angular/core';

export interface Post{
  title: string;
  thought: string;
}



@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  title = 'ANG-Lab2-Social-Posts';
  posts: Post[]= [

    {
      title: 'Grand Circus',
      thought: 'Grand Circus is cool.'
    },
    {
      title: 'Ritual',
      thought: 'Ritual is a well developed app.'
    },
    {
      title: 'Scott',
      thought: 'Scott rides scooters.'
    },
  ]
  
  showForm : boolean = false;


  constructor() { }

  ngOnInit() {
  }

  onSubmit(post){
    this.showForm = false;
    this.posts.unshift(post)

  }

  showThoughtForm(){
    this.showForm = true;
  }

  onDelete(i) {
    this.posts.splice(i,1);
  }

}
