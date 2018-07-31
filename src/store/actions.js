export const TYPES = {
  SET_EXAMPLE_VALUE: 'SET_EXAMPLE_VALUE'
}

export const actions = {
  setExampleValue: (bool) => ({ type: TYPES.SET_EXAMPLE_VALUE, bool })
}
