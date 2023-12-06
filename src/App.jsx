import { useState } from "react";
import "./App.css";
import { createClient } from "contentful";

function App() {
  const [count, setCount] = useState(0);
  const SPACE_ID = import.meta.env.VITE_SPACE_ID;
  const ENVIRONMENT_NAME = import.meta.env.VITE_ENVIRONMENT_NAME;
  const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

  const client = createClient({
    space: SPACE_ID,
    environment: ENVIRONMENT_NAME,
    accessToken: ACCESS_TOKEN
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
