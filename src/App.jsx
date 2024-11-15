import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
// import Counter from "./components/Counter";

function App() {
  const [counters, setCounter] = useState([0, 5]);
  const decr = () => {
    let newCounters = [...counters];
    newCounters = counters - 1;
    setCounter(newCounters);
  };
  const incr = () => {
    setCounter(counters + 1);
  };
  return (
    <>
      <Header title="React Counter v2" />
      <main className="container">
        {counters.map((counter, index) => {
          return (
            <section key={index} className="btn">
              {/* <button className="btn-add-counter" onClick={() => {}}>
                Add counter
              </button> */}
              <div className="button">
                <button onClick={decr}>-</button>
                <p>{counter}</p>
                <button onClick={incr}> + </button>
              </div>
              <div className="button">
                <button
                  onClick={() => {
                    setCounter(0);
                  }}
                >
                  Reset
                </button>
              </div>
            </section>
          );
        })}
        {/* <Counter counter={counter.counter} setCounter={setCounter} /> */}
      </main>
    </>
  );
}

export default App;
