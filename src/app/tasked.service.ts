import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task'

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskedService {
  private taskUrl = 'http://192.168.2.121:3128/task';
  private getUrl = 'http://192.168.2.121:3128/tasks'
  constructor(private http: HttpClient) { }

  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>('http://192.168.2.121:3128/tasks');
  }

  getTask(id: number): Observable<Task> {
    const url = `${this.taskUrl}/${id}`;
    return this.http.get<Task>(url);
  }

  addTask (task: Task): Observable<Task> {
    return this.http.post<Task>('http://192.168.2.121:3128/task', task, httpOptions);
  }

  deleteTask (task: Task | number): Observable<Task> {
    const id = typeof task === 'number' ? task : task.tid;
    const url = `${this.taskUrl}/${id}`;
    console.log(id);
    return this.http.delete<Task>(url, httpOptions);
  }

  updateTask (task: Task): Observable<Task> {
    return this.http.put<Task>(`http://192.168.2.121:3128/task/${task.tid}`, task);
  }
}
