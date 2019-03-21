// Constants
export const INC = "COUNTER_INC";
export const RESET = "COUNTER_RESET";
export const SET = "COUNTER_SET";

// Actions
export const inc = amount => ({ type: INC, payload: amount });
export const reset = () => ({ type: RESET });
export const set = number => ({ type: SET, payload: number });
export const setRandom = () => dispatch => {
  dispatch(set("???"));
  fetch("http://68.183.212.209:8080/random-number")
    .then(response => response.json())
    .then(data => {
      dispatch(set(data.number));
    })
    .catch(() => {
      dispatch(set(0));
    });
};
