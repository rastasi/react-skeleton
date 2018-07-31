import { TYPES } from './actions'

const initialStates = {
  settings: {
    example_value: true
  }
}

export const settings = (state = initialStates.settings, action) => {
  switch (action.type) {
    case TYPES.SET_EXAMPLE_VALUE:
      return Object.assign({}, state, { exampleValue: action.bool })
    default:
      return state
  }
}
