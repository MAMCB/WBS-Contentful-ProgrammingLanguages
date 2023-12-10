import { useState } from "react";
import "./App.css";
import { createClient } from "contentful";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import { useEnvironmentVariables } from './hooks/useEnvironmentVariables';
import LanguagesPage from './pages/LanguagesPage'


function App() {
  const[languages,setLanguages]=useState([])
  const { SPACE_ID, ENVIRONMENT_NAME, ACCESS_TOKEN } = useEnvironmentVariables();

  const client = createClient({
    space: SPACE_ID,
    environment: ENVIRONMENT_NAME,
    accessToken: ACCESS_TOKEN
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/programming"
          element={
            <LanguagesPage
              type="Programming"
            />
          }
        />
        <Route
          path="/script"
          element={
            <LanguagesPage
              type="Scripting"
            />
          }
        />
        <Route
          path="/query"
          element={
            <LanguagesPage
              type="Query"
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
