import { useState,useEffect } from "react";
import "./App.css";
import { createClient } from "contentful";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import { useEnvironmentVariables } from './hooks/useEnvironmentVariables';
import LanguageGrid from './components/LanguageGrid'
import { Link } from "react-router-dom";


function App() {
  const[languages,setLanguages]=useState([]);
  
  const { SPACE_ID, ENVIRONMENT_NAME, ACCESS_TOKEN } = useEnvironmentVariables();

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

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/programming">Programming Languages</Link>
      <Link to="/script">Scripting Languages</Link>
      <Link to="/query">Query Languages</Link>

      <Routes>
        <Route path="/" element={<Home languages={languages} />} />
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
              type={languages.filter((language) => language.type === "Query")}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
