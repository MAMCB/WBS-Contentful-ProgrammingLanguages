import { useState } from "react";
import "./App.css";
import { createClient } from "contentful";

function App() {
  
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
      
    </>
  );
}

export default App;
