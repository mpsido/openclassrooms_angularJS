import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component-item',
  templateUrl: './post-list-component-item.component.html',
  styleUrls: ['./post-list-component-item.component.scss']
})
export class PostListComponentItemComponent implements OnInit {

  @Input() post_title: string;
  @Input() content: string;
  countLike: number = 0;
  countDislike: number = 0;
  postDate = new Date();

  constructor() { }

  ngOnInit() {
  }

  Like() {
    this.countLike++;
  }


  Dislike() {
    this.countDislike++;
  }

  getColor() {
    if(this.countLike > this.countDislike) {
      return 'green';
    } else if(this.countLike < this.countDislike) {
      return 'red';
    } else {
      return 'black';
    }
  }

  getClass() {
    if(this.countLike > this.countDislike) {
      return 'list-group-item-success';
    } else if(this.countLike < this.countDislike) {
      return 'list-group-item-danger';
    } else {
      return '';
    }
  }

}
