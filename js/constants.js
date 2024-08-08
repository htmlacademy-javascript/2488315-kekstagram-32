export const Effect = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

export const effectToFilter = {
  [Effect.CHROME]: {
    style: 'grayscale',
    unit:'',

  },

  [Effect.SEPIA]: {
    style: 'sepia',
    unit: '',
  },

  [Effect.MARVIN]: {
    style: 'invert',
    unit: '%',
  },

  [Effect.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },

  [Effect.HEAT]: {
    style: 'brightness',
    unit: '',
  },
};

export const effectToSliderOptions = {
  [Effect.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,
  },

  [Effect.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effect.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effect.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [Effect.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [Effect.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
  },
};
