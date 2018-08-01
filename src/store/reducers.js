import { TYPES } from './actions'

const initialStates = {
  testGroup: {
    exampleValue: 'test'
  }
}

export const testGroup = (state = initialStates.testGroup, action) => {
  switch (action.type) {
    case TYPES.SET_EXAMPLE_VALUE:
      return Object.assign({}, state, { exampleValue: action.text })
    default:
      return state
  }
}
