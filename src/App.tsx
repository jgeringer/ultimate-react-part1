import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  // this is a side effect. it's changing something outside of this component (DOM in this case).
  // it's not a pure component anymore, so let's use useEffect
  // if (ref.current) ref.current.focus();

  const [category, setCategory] = useState("");

  // might also be called after render
  // useEffect(() => {
  //   // if (ref.current) ref.current.focus();
  // });

  const connect = () => console.log("connecting...");
  const disconnect = () => console.log("disconecting...");

  useEffect(() => {
    connect();

    return () => disconnect();
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />

      <select
        name=""
        id=""
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="clothing">clothing</option>
        <option value="household">household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
