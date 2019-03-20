// Constants
export const INC = "COUNTER_INC";
export const RESET = "COUNTER_RESET";

// Actions
export const inc = amount => ({ type: INC, payload: amount });
export const reset = () => ({ type: RESET });
