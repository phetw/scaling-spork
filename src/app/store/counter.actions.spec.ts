import { ActionTypes, Increment, Decrement, Reset } from './counter.actions'

describe('Increment', () => {
  it('should create an increment action', () => {
    const action = new Increment()
    expect(action.type).toEqual(ActionTypes.Increment)
  })
})
describe('Decrement', () => {
  it('should create a decrement action', () => {
    const action = new Decrement()
    expect(action.type).toEqual(ActionTypes.Decrement)
  })
})
describe('Reset', () => {
  it('should create a reset action', () => {
    const action = new Reset()
    expect(action.type).toEqual(ActionTypes.Reset)
  })
})
