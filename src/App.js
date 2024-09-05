import React from "react";
import Counter from "./Counter";

function App() {
  const element = <h1>hello World</h1>
  return (
    <div className="App">
      {element}
      <h1>hello, React</h1>
      <Counter/>
    </div>
  )
}

export default App;