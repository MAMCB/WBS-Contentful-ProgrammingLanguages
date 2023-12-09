import React from "react";
import { useState } from "react";
import "./App.css";
import { createClient } from "contentful";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import { useEnvironmentVariables } from './hooks/useEnvironmentVariables';
import LanguageGrid from './components/LanguageGrid'

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


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
      <NavBar /> {/* Include the NavBar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/programming"
          element={
            <LanguageGrid
              type={languages.filter(
                (language) => language.type === "programming"
              )}
            />
          }
        />
        <Route
          path="/script"
          element={
            <LanguageGrid
              type={languages.filter(
                (language) => language.type === "scripting"
              )}
            />
          }
        />
        <Route
          path="/query"
          element={
            <LanguageGrid
              type={languages.filter(
                (language) => language.type === "query"
              )}
            />
          }
        />
      </Routes>
     < Footer /> 
    </>
  );
}

export default App;
