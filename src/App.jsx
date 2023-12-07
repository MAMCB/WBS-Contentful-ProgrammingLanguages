import React from "react";
import { useState } from "react";
import "./App.css";
import { createClient } from "contentful";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import LanguageGrid from "./pages/LanguageGrid";
import NavBar from './NavBar';

function App() {
  const[languages,setLanguages]=useState([])
  
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
    </>
  );
}

export default App;
