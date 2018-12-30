import { ActionTypes, Increment, Decrement, Reset } from './counter.actions'

describe('Increment action', () => {
  it('should create an increment action', () => {
    const action = new Increment()
    expect(action.type).toEqual(ActionTypes.INCREMENT)
  })
})
describe('Decrement action', () => {
  it('should create a decrement action', () => {
    const action = new Decrement()
    expect(action.type).toEqual(ActionTypes.DECREMENT)
  })
})
describe('Reset action', () => {
  it('should create a reset action', () => {
    const action = new Reset()
    expect(action.type).toEqual(ActionTypes.RESET)
  })
})
