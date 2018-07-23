import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  public searchValue: string;
  @Output() search = new EventEmitter<string>();
  @Output() addCourse = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public find(): void {
    this.search.emit(this.searchValue);
  }

  public openAddCoursePage(): void {
    this.addCourse.emit(true);
  }
}
