const Types = {
  TOAST_MESSAGE: 'global@TOAST_MESSAGE',
};

const Actions = {
  toastMessage: (message: String, duration: number = 3000) => ({
    type: Types.TOAST_MESSAGE,
    payload: { message, duration, },
  }),
};

export { Types, Actions };
