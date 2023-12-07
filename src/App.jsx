import { useState,useEffect } from "react";
import "./App.css";
import { createClient } from "contentful";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import LanguageGrid from "./pages/LanguageGrid";

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

  useEffect(()=>{
    client
      .getEntries()
      .then((response) => setLanguages(response.items.map((e)=>e.fields)))
      .catch(console.error);
  },[])
  console.log(languages);
  console.log(languages.filter((language) => language.type === "Programming"));
  console.log(languages.filter((language) => language.type === "Scripting"));
  console.log(languages.filter((language) => language.type === "Query"));

//   useEffect(()=>{
//  client
//    .getEntry("2u1qwRm2mazyQk1phkDY50")
//    .then((entry) => console.log(entry))
//    .catch(console.error);
//   },[])
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/programming"
          element={
            <LanguageGrid
              type={languages.filter(
                (language) => language.type === "Programming"
              )}
            />
          }
        />
        <Route
          path="/script"
          element={
            <LanguageGrid
              type={languages.filter(
                (language) => language.type === "Scripting"
              )}
            />
          }
        />
        <Route
          path="/query"
          element={
            <LanguageGrid
              type={languages.filter(
                (language) => language.type === "Query"
              )}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
