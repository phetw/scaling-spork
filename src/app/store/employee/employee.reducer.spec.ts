import { Action } from '@ngrx/store'
import { MockEmployee } from './employee.mock-data'
import { LoadEmployee, LoadEmployeeSuccess, LoadEmployeeFailed } from './employee.action'
import { initialState, employeeReducer } from './employee.reducer'

describe('Employee reducer', () => {
  describe('undefined action', () => {
    it('should return default state', () => {
      const action: Action = {
        type: undefined,
      }
      const state = employeeReducer(undefined, action)
      expect(state).toEqual(initialState)
    })
  })
  describe('load employee action', () => {
    it('should return state with loading status', () => {
      const action = new LoadEmployee()
      const state = employeeReducer(initialState, action)
      expect(state).toEqual({
        ...initialState,
        loading: true,
      })
    })
  })
  describe('load employee success action', () => {
    it('should successfully return a list of employee and status loaded', () => {
      const payload = MockEmployee
      const action = new LoadEmployeeSuccess(payload)
      const state = employeeReducer(initialState, action)
      expect(state).toEqual({
        data: payload,
        loading: false,
        loaded: true,
      })
    })
  })
  describe('load employee failed action', () => {
    it('should successfully return an empty array', () => {
      const action = new LoadEmployeeFailed()
      const state = employeeReducer(initialState, action)
      expect(state).toEqual({
        ...initialState,
        loading: false,
        loaded: false,
      })
    })
  })
})
