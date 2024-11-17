import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
// import Counter from "./components/Counter";

function App() {
  const [counters, setCounter] = useState([0]);
  const decr = (index) => {
    let newCounters = [...counters];
    newCounters[index] -= 1;
    setCounter(newCounters);
  };
  const incr = (index) => {
    let newCounters = [...counters];
    console.log(newCounters);

    newCounters[index] += 1;
    setCounter(newCounters);
  };
  const reset = (index) => {
    let newCounters = [...counters];
    newCounters[index] = 0;
    setCounter(newCounters);
  };

  const addCounter = () => {
    let newCounters = [...counters];
    newCounters.push(0);
    setCounter(newCounters);
  };

  return (
    <>
      <Header title="React Counter v2" />
      <main className="container">
        {counters.length < 3 && (
          <button onClick={() => addCounter()}>Add counter</button>
        )}

        {counters.map((counter, index) => (
          <section key={index} className="btn">
            <div className="button">
              <button onClick={() => decr(index)}>-</button>
              <p>{counter}</p>
              <button onClick={() => incr(index)}> + </button>
            </div>
            <div className="button">
              <button onClick={() => reset(index)}>Reset</button>
            </div>
          </section>
        ))}
        {/* <Counter counter={counter.counter} setCounter={setCounter} /> */}
      </main>
    </>
  );
}

export default App;
