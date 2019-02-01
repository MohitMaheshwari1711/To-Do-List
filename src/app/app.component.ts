import { Component, OnInit } from '@angular/core';
import { TaskedService } from './tasked.service';
import { Task } from './task';
import io from "socket.io-client";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final';
  tasks: Task[];
  editTask :Task;
  data1:any ;

private url = 'http://192.168.2.153:8080';
private socket;
keys: any;

  constructor(private taskedService: TaskedService) {}

  ngOnInit() {
    //this.getTasks();
    this.socket = io.connect(this.url);
    // this.socket.on('connect', function() {
		// 	console.log('<span class="connect-msg">Client has connected to the server!</span>');
    // });
    

		this.socket.on('add', function(data) {
      //this.keys = Object.keys(data);
      //console.log(this.keys);
      //var str1 = data;
      var json = JSON.parse(data);
      console.log(json);
      console.log(json[20].title);
      //console.log(json.title);
      // console.log(this.keys);
      this.data1 = data;
      // var str = JSON.parse(this.data1);
      //console.log(this.data1[0]);
      //console.log(this.data1);
      // for(var i=0; i<=this.data1.length; i++) {
        
      // }
			//console.log('<span class="username-msg">' + this.data1);
		});

		// this.socket.on('disconnect', function() {
		// 	console.log('<span class="disconnect-msg">The client has disconnected!</span>');
		// });

    //this.socket.on('addTodo', (tasks) => {
    //   this.tasks.push(tasks);
    // });
    // this.socket.on('addTodo', () => {
    //   this.getTasks();
    // })
  }

  // getTasks(): void {
  //   this.taskedService.getTasks()
  //   .subscribe(task => this.tasks = task);
  // }


  // add(title: string): void {
  //   title = title.trim();
  //   if (!title) { return; }
  //   this.taskedService.addTask({ title } as Task)
  //     .subscribe(task => {
  //       this.tasks.push(task);
  //       //this.getTasks();
  //     });
  // }
  
  // delete(task: Task): void {
  //   this.tasks = this.tasks.filter(h => h !== task);
  //   this.taskedService.deleteTask(task).subscribe();
  // }

  // edit(task) {
  //   this.editTask = task;
  // }

  // update() {
  //   if (this.editTask) {
  //     this.taskedService.updateTask(this.editTask).subscribe(task => {
  //       const ix = task ? this.tasks.findIndex(h => h.id === task.id) : -1;
  //       if (ix > -1) {
  //         this.tasks[ix] = task;
  //       }
  //     });
  //     this.editTask = undefined;
  //   }
  // }

  // add(title: string): void {
  //   title = title.trim();
  //   if (!title) { return; }
  //   this.taskedService.addTask(title, this.socket);
  // }
}



