import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  title = "Posts";
  items = [
  {
    title: "Mon premier post",
    content: "blabla je suis bavard"
  },
  {
    title: "Post de reponse",
    content: "tais toi tu parles trop"
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
