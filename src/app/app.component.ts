import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "./pages/todo/todo.component";
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './models/todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todoData = TODO_DATA.filter(item=> item.id<4);

  // @ViewChild('todoRef', {read: ElementRef}) todo?: TodoComponent;
  @ViewChildren('todoRef', {read: ElementRef}) todo?: QueryList<ElementRef>;

  constructor(){}

  getTodoInfo(val: NTodo.TodoData) {
    console.log(val);
  }

  trackByFn(_index: number, item: NTodo.TodoData){
    return item.id;
  }

  orderData(){
    this.todoData.sort((a,b)=>a.priority - b.priority)
  }

  selectTodo(){
    // const todo =document.querySelectorAll('app-todo');
    console.log(this.todo);
    // this.todo?.changes.subscribe(values =>{
    //   console.log(values);
    // });
  }

  addTodo() {
    this.todoData = TODO_DATA.filter(item=> item.id<5);
  }
}
