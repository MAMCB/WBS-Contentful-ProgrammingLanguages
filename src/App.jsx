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
  const[displayLanguage,setDisplayLanguage]=useState(null);
  const[languageToFind,setLanguageToFind]=useState("");
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
  
 const handleSearch = (e)=>{
    console.log(languageToFind);
    const languageToDisplay = languages.find(
      (language) => language.name.toLowerCase() === languageToFind
    );
    
   languageToDisplay? setDisplayLanguage(languageToDisplay):alert("Could not find that language");

 }

 const storeValue = (e)=>{
  console.log(e.target.value)
  setLanguageToFind(e.target.value.toLowerCase());
 }

 console.log(languages);

  return (
    <>
      <Link to="/programming">Programming Languages</Link>
      <Link to="/script">Scripting Languages</Link>
      <Link to="/query">Query Languages</Link>

      {displayLanguage ? (
        <div>
          <img
            src={displayLanguage.thumbnail.fields.file.url}
            alt="displayLanguage.thumbnail.fields.title"
          />
          <h2>{displayLanguage.name}</h2>
          <p>{displayLanguage.description}</p>
        </div>
      ) : (
        <h1>Explore the world of Programming Languages</h1>
      )}

      <input
        type="text"
        onChange={storeValue}
        placeholder="Search for a language"
      />
      <button onClick={handleSearch}>Search</button>

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
              type={languages.filter((language) => language.type === "Query")}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
