import { Action } from '@ngrx/store'
import { ActionTypes } from './employee.action'
import { Employee } from './employee.model'
// import { Employee } from './employee.model'

export interface initialStateInterface {
  data: []
  loaded: boolean
  loading: boolean
}

export const initialState: initialStateInterface = {
  data: [],
  loaded: false,
  loading: false,
}

interface EmployeeAction extends Action {
  type: string
  payload?: any
}

export function employeeReducer(state = initialState, action: EmployeeAction) {
  switch (action.type) {
    case ActionTypes.LOAD_EMPLOYEE:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.LOAD_EMPLOYEE_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        loaded: true,
      }
    case ActionTypes.LOAD_EMPLOYEE_FAILED:
      return {
        ...state,
        loading: false,
        loaded: false,
      }
    default:
      return state
  }
}
