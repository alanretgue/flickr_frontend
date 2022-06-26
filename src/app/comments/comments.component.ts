import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { RequestService } from '../request.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Comments, Comment, RequestCommentsApi } from '../request-api-interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnChanges {

  @Input() id = "";

  comments: Comments = {
    photo_id: "",
    comment: []
  };

  commentApi: RequestCommentsApi = {
    comments: this.comments,
    stat: ""
  }

  getComments() {
    this.Request
        .getComments(this.id)
        .subscribe((data: RequestCommentsApi) => {
          this.commentApi = data;
          //this.Request.totalColors.next(this.photos.length);
        },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log('[getComments] Client-side error occured.');
            } else {
              console.log('[getComments] Server-side error occured.');
            }
          });
  }

  constructor(private Request: RequestService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.id = changes['id'].currentValue;
    this.getComments();
    if (!changes['id'].isFirstChange) {
      this.getComments();
    }
  }

}
