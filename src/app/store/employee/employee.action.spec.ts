import { MockEmployee } from './employee.mock-data'
import { ActionTypes, LoadEmployee, LoadEmployeeSuccess, LoadEmployeeFailed } from './employee.action'

describe('Load Employee action', () => {
  it('should create an action', () => {
    const action = new LoadEmployee()
    expect(action.type).toEqual(ActionTypes.LOAD_EMPLOYEE)
  })
})

describe('Load Employee Success action', () => {
  it('should create an action with employee array as a payload', () => {
    const payload = MockEmployee
    const action = new LoadEmployeeSuccess(payload)

    expect({ ...action }).toEqual({
      type: ActionTypes.LOAD_EMPLOYEE_SUCCESS,
      payload,
    })
  })
})

describe('Load Employee Failed action', () => {
  it('should create an with ...', () => {
    const err = 'error message'
    const action = new LoadEmployeeFailed(err)
    expect({ ...action }).toEqual({
      type: ActionTypes.LOAD_EMPLOYEE_FAILED,
      payload: err,
    })
  })
})
