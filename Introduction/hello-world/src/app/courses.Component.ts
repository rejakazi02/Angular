import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";


@Component({

  selector: 'courses',
  template:

  `

  <h2>{{"Title: " +  title   }}</h2>

  <ul>

  <li *ngFor="let course of courses">{{course}}
  </li>

  </ul>
  `
})

export class CoursesComponent {
title = " List of courses";
courses;

// fast away

// constructor() {
//   let service = new CoursesService();
//   this.courses = service.getCourses();
// }

// 2nd AWAY  .

constructor(service: CoursesService) {

  this.courses = service.getCourses();
}

}
