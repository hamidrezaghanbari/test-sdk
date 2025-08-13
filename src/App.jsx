import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const stageParam = urlParams.get("stage");

    if (stageParam !== null) {
      const scriptElement = document.querySelector("script[data-is-stage]");
      if (scriptElement) {
        scriptElement.setAttribute("data-is-stage", stageParam);
      }
    }
  }, []);

  const setStageFlag = (isStage) => {
    const url = new URL(window.location);
    url.searchParams.set("stage", isStage.toString());
    window.location.href = url.toString();
  };

  return (
    <div>
      <h1>React App</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setStageFlag(true)}>Set Stage: True</button>
        <button
          onClick={() => setStageFlag(false)}
          style={{ marginLeft: "10px" }}
        >
          Set Stage: False
        </button>
      </div>
    </div>
  );
}

export default App;
