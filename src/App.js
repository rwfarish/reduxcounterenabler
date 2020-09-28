import React, { useReducer } from "react";

import {
  incrementCounter,
  decrementCounter,
  incrementByN,
  decrementByN,
  updateN,
  enableIncrement,
} from "./Actions";

import { CreateStore } from "./Store";

import { rootReducer } from "./Reducers";

function App() {
  const store = CreateStore(rootReducer);
  return (
    <div>
      <div>{store.getState().incrementers.counter}</div>
      <button onClick={() => store.dispatch(incrementCounter())}>
        Increment
      </button>
      <button onClick={() => store.dispatch(decrementCounter())}>
        Decrement
      </button>
      <input
        onChange={(event) =>
          store.dispatch(updateN(Number(event.target.value)))
        }
      />
      <button
        onClick={() => store.dispatch(incrementByN())}
        disabled={!store.getState().enablers.enabled}
      >
        Increment by N
      </button>
      <button
        onClick={() => store.dispatch(decrementByN())}
        disabled={!store.getState().enablers.enabled}
      >
        Decrement by N
      </button>
      <button onClick={() => store.dispatch(enableIncrement())}>
        {store.getState().enablers.enabled ? "Disable" : "Enable"}
      </button>
    </div>
  );
}

export default App;
