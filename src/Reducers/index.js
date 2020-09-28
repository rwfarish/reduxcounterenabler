import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  UPDATE_N,
  INCREMENT_BY_N,
  DECREMENT_BY_N,
  ENABLE_INCREMENT,
} from "../Actions";

const incrementerReducer = (state = { counter: 0, n: 0 }, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case INCREMENT_BY_N:
      return { ...state, counter: state.counter + state.n };
    case DECREMENT_BY_N:
      return { ...state, counter: state.counter - state.n };
    case UPDATE_N:
      return { ...state, n: action.n };
    default:
      return state;
  }
};

const enabledReducer = (
  state = {
    enabled: true,
  },
  action
) => {
  switch (action.type) {
    case ENABLE_INCREMENT:
      return { ...state, enabled: !state.enabled };
    default:
      return state;
  }
};

export function rootReducer(state = {}, action) {
  return {
    incrementers: incrementerReducer(state.incrementers, action),
    enablers: enabledReducer(state.enablers, action),
  };
}
