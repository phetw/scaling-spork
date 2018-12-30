import { Action } from '@ngrx/store'
import { Employee } from './employee.model'

export enum ActionTypes {
  LOAD_EMPLOYEE = '[Employee] Load Employee',
  LOAD_EMPLOYEE_SUCCESS = '[Employee] Load Employee Success',
  LOAD_EMPLOYEE_FAILED = '[Employee] Load Employee Failed',
}

export class LoadEmployee implements Action {
  readonly type = ActionTypes.LOAD_EMPLOYEE
}

export class LoadEmployeeSuccess implements Action {
  readonly type = ActionTypes.LOAD_EMPLOYEE_SUCCESS
  constructor(public payload: Employee[]) {}
}

export class LoadEmployeeFailed implements Action {
  readonly type = ActionTypes.LOAD_EMPLOYEE_FAILED
  constructor(public payload: any = null) {}
}
