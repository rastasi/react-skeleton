export const TYPES = {
  SET_EXAMPLE_VALUE: 'SET_EXAMPLE_VALUE'
}

export const actions = {
  setExampleValue: (text) => ({ type: TYPES.SET_EXAMPLE_VALUE, text })
}
