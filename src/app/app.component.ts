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
    this.getHeroes();
  }

  getHeroes(): void {
    this.taskedService.getHeroes()
    .subscribe(tasks => this.tasks = tasks);
  }

  add(tname: string): void {
    tname = tname.trim();
    if (!tname) { return; }
    this.taskedService.addHero({ tname } as Task)
      .subscribe(task => {
        this.tasks.push(task);
        this.getHeroes();
      });
  }
  
  delete(task: Task): void {
    this.tasks = this.tasks.filter(h => h !== task);
    this.taskedService.deleteHero(task).subscribe();
  }
  
}
