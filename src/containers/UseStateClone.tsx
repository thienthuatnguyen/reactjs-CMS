import { useReducer } from "react";
import demoReducer, { shareState } from "../reducers/demoReducer";

function UseStateClone(props: any) {
    const [state, dispatch] = useReducer(demoReducer, shareState);
    return (
      <>
      at other component
        Count: {state.count} {props.value}
      </>
    );
  }

  export default UseStateClone;