import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
  @Input() title : string;
  @Input() thought : string;
  @Input() post : string;

  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deletePost() {
    this.deleted.emit();
  }

}
