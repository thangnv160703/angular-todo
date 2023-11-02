import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs'
import { ITask } from '../interfaces/ITask';

@Injectable({
  providedIn: 'root'
})
export class TaskCrudService {
  private LINK = 'https://64ab66bf0c6d844abedf5638.mockapi.io/thangnv/todo/tasks'
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.LINK).pipe(
      map((response: ITask[]) => {
        return response.map((task: ITask) => {
          return {
            id: Number(task.id),
            note: task.note,
            deadline: new Date(task.deadline),
            isCompleted: task.isCompleted,
            title: task.title
          }
        })
      })
    );
  }

  private createNewTask(task: ITask): ITask {
    return {
      id: Number(task.id),
      note: task.note,
      deadline: new Date(task.deadline),
      isCompleted: task.isCompleted,
      title: task.title
    }
  }

  public getById(taskId: number): Observable<ITask> {
    const url = this.LINK + '/' + taskId;
    return this.http.get<ITask>(this.LINK).pipe(
      map((response: ITask) => {
        return {
          id: Number(response.id),
          note: response.note,
          deadline: new Date(response.deadline),
          isCompleted: response.isCompleted,
          title: response.title
        }
      })
    )
  }

  public update(task: ITask): Observable<ITask> {
    const url = this.LINK + '/' + task.id;
    return this.http.put<ITask>(
      url, JSON.stringify(task), this.httpOptions
    ).pipe(
      map((response:ITask) => this.createNewTask(response)),
      catchError(this.handleError)
    );
  }

  public save(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(
      this.LINK, JSON.stringify(task), this.httpOptions
    ).pipe(catchError(this.handleError));
  }

  public delete(task: ITask) {
    const url = this.LINK + '/' + task.id;
    return this.http.delete(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError() {
    return throwError(() => new Error("Error happened"));
  }
}
