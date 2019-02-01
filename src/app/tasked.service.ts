import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task'
import { Observable, of } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskedService {
  private taskUrl = 'http://192.168.2.153:3128/test';
  private getUrl = 'http://192.168.2.153:3128/test';
  //response: any;
  constructor(private http: HttpClient) { }

  // getTasks (): Observable<Task[]> {
  //   return this.http.get<Task[]>('http://192.168.2.153:3128/test')
   //// .pipe(map((response: any) => response.json()));
  //}

  // getTask(id: number): Observable<Task> {
  //   const url = `${this.taskUrl}/${id}`;
  //   return this.http.get<Task>(url);
  // }

  // addTask (task: Task): Observable<Task> {
  //   return this.http.post<Task>('http://192.168.2.153:8080/jerseyJetty/webapi/myresource/add_task', task, httpOptions);
  // }

  // deleteTask (task: Task | number): Observable<Task> {
  //   const id = typeof task === 'number' ? task : task.id;
  //   const url = `${this.taskUrl}/${id}`;
  //   console.log(id);
  //   return this.http.delete<Task>(url, httpOptions);
  // }

  // updateTask (task: Task): Observable<Task> {
  //   return this.http.put<Task>(`http://192.168.2.153:3128/test/${task.id}`, task);
  // }

  addTask (message: string, socket: any): void {
    socket.emit('addTodo', { message: 'message'});
  }
  
}
