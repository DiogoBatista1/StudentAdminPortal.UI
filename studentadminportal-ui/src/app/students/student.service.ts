import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = "https://localhost:44336";

  constructor(private httClient: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.httClient.get<Student[]>(
      this.baseApiUrl + '/students'
    );
  }

  getStudent(studentId: String): Observable<Student> {
    return this.httClient.get<Student>(
      this.baseApiUrl + '/students/' + studentId
    );
  }
}
