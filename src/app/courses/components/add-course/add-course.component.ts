import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  @Output() closePage = new EventEmitter<boolean>();
  public courseTitle = '';
  public courseDescription = '';
  public courseDuration = 0;
  public courseDate = '';
  public courseAuthors = '';

  constructor() { }

  ngOnInit() {
  }

  public close() {
    this.closePage.emit(true);
  }
  

}
