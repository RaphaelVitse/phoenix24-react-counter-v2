import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState({ counter: 0 });

  return (
    <>
      <Header title="React Counter v2" />
      <main className="container">
        <Counter counter={counter.counter} setCounter={setCounter} />
      </main>
    </>
  );
}

export default App;
