import { Injectable } from '@angular/core'
import { environment } from '@env/environment'
import { Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

interface IResponse {
  status: number
  message: string
  data: any
}

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(environment.api.employee).pipe(
      map((res: IResponse) => {
        return res.data
      }),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error)
    if (error.error instanceof Error) {
      const errMessage = error.error.message
      return Observable.throw(errMessage)
    }
    return Observable.throw(error || 'Node.js server error')
  }
}
