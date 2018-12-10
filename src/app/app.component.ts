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
  editTask :Task;

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

  edit(task) {
    this.editTask = task;
  }

  update() {
    if (this.editTask) {
      this.taskedService.updateTask(this.editTask).subscribe(task => {
        const ix = task ? this.tasks.findIndex(h => h.tid === task.tid) : -1;
        if (ix > -1) {
          this.tasks[ix] = task;
        }
      });
      this.editTask = undefined;
    }
  }
}


// let title = this.tasks[idx].title;
//    let result = prompt("Edit Task Title", title);
//    if (result !== null && result !== ""){
//      this.tasks[idx].title = result;
//    }
//  }
