import { useReducer } from "react";
import demoReducer, { shareState } from "../reducers/demoReducer";
import UseStateClone from "./UseStateClone";

function UseState() {
    const [state, dispatch] = useReducer(demoReducer, shareState);
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>

        <UseStateClone value = {state.count}></UseStateClone>
      </>
    );
  }

  export default UseState;