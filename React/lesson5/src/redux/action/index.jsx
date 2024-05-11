export const incremnetFunct = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrementFunct = () => {
  return {
    type: "DECREMENT",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
