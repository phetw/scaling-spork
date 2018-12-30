import { Action } from '@ngrx/store'
import { initialState, counterReducer } from './counter.reducer'
import { ActionTypes, Increment, Decrement, Reset } from './counter.actions'

describe('counter reducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action: Action = {
        type: undefined,
      }
      const state = counterReducer(undefined, action)
      expect(state).toBe(initialState)
    })
  })
  describe('increment action', () => {
    it('should return count + 1', () => {
      const state = counterReducer(undefined, new Increment())
      expect(state).toBe(initialState + 1)
    })
  })

  describe('decrement action', () => {
    it('should return count - 1', () => {
      const state = counterReducer(undefined, new Decrement())
      expect(state).toBe(initialState - 1)
    })
  })

  describe('reset action', () => {
    it('should return initial state', () => {
      const state = counterReducer(undefined, new Reset())
      expect(state).toBe(initialState)
    })
  })
})
