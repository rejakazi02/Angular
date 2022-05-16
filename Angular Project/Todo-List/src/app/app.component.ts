import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo List With Angular';
lists: any[] = [];
  addTask(item: string){
this.lists.push({id:this.lists.length, name:item})
console.warn(item);
  }


  removeTask(id: number) {

    this.lists=this.lists.filter(item=>item.id!==id)
  }
}
