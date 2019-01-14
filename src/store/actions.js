export const TYPES = {
  SET_EXAMPLE_VALUE: 'SET_EXAMPLE_VALUE',
  SET_LOCALE: 'SET_LOCALE'
};

export const actions = {
  setExampleValue: text => ({ type: TYPES.SET_EXAMPLE_VALUE, text }),
  setLocale: locale => ({ type: TYPES.SET_LOCALE, locale })
};
