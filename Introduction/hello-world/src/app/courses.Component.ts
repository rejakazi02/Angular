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


  <img src="{{ imageUrl }}" style="width: 300px;" />
  // <img [src]="title" />

/* Pipes*/

<br>
{{ coursess.titles }} <br>
{{ coursess.students }} <br>
{{ coursess.rating }} <br>
{{ coursess.price }} <br>
{{ coursess.releaseDate }} <br>


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



imageUrl = "https://picsum.photos/seed/picsum/200/300";


/* Pipes*/

coursess = {

  titles: "The complete Angular Course",
  rating: 4.9876,
  students: 32156,
  price: 10987,
  releaseDate: new Date(2022,3,1)
}

}
