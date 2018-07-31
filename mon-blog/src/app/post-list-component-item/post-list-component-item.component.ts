import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component-item',
  templateUrl: './post-list-component-item.component.html',
  styleUrls: ['./post-list-component-item.component.scss']
})
export class PostListComponentItemComponent implements OnInit {

  @Input() post_title: string;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
