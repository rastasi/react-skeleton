import { TYPES } from './actions';

const initialStates = {
  testGroup: {
    exampleValue: 'test'
  },
  localeGroup: {
    locale: 'hu'
  }
};

export const testGroup = (state = initialStates.testGroup, action) => {
  switch (action.type) {
    case TYPES.SET_EXAMPLE_VALUE:
      return Object.assign({}, state, { exampleValue: action.text });
    default:
      return state;
  }
};
export const localeGroup = (state = initialStates.localeGroup, action) => {
  switch (action.type) {
    case TYPES.SET_LOCALE: {
      return {
        ...state,
        locale: action.locale
      };
    }
    default:
      return state;
  }
};
