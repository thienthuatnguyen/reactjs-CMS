import { useEffect, useState } from "react";

function UserPage() {
    const [count, setCount] = useState(0);

    const [element, setArray] = useState([{type: 'abc'}]);
    useEffect(() => {
        console.log('changed')
      });
    return (
      <div>
        <p>{element[0].type}</p>
        <p>{element[1]?.type}</p>
        <p>You clicked {count} times</p>
        <button onClick={() => {setCount(count + 1); setArray([...element, {type: 'thuat'}]); console.log(element)}}>
          Click me
        </button>
      </div>
    );
  };
  
  export default UserPage;
  