import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  states: string[] = [
    'HeadPhone',
    'Mobile',
    'Watch',
    'TV',
    'California',
    'Colorado',

  ];
}
