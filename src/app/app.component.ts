import { Component, OnInit } from '@angular/core';
import { TaskedService } from './tasked.service';
import { Task } from './task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final';
  tasks: Task[];
  editTask = Task;

  constructor(private taskedService: TaskedService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskedService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  add(tname: string): void {
    tname = tname.trim();
    if (!tname) { return; }
    this.taskedService.addTask({ tname } as Task)
      .subscribe(task => {
        this.tasks.push(task);
        this.getTasks();
      });
  }
  
  delete(task: Task): void {
    this.tasks = this.tasks.filter(h => h !== task);
    this.taskedService.deleteTask(task).subscribe();
  }
}


// let title = this.tasks[idx].title;
//    let result = prompt("Edit Task Title", title);
//    if (result !== null && result !== ""){
//      this.tasks[idx].title = result;
//    }
//  }
