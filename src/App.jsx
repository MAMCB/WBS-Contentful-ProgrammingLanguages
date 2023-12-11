import { useState,useEffect } from "react";
import "./App.css";
import { createClient } from "contentful";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import { useEnvironmentVariables } from "./hooks/useEnvironmentVariables";
import LanguagesPage from "./pages/LanguagesPage";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/NotFound";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, fas);

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  const [languages, setLanguages] = useState([]);
  const { SPACE_ID, ENVIRONMENT_NAME, ACCESS_TOKEN } =
    useEnvironmentVariables();

  const client = createClient({
    space: SPACE_ID,
    environment: ENVIRONMENT_NAME,
    accessToken: ACCESS_TOKEN,
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
      <NavBar /> {/* Include the NavBar component */}
      <Routes>
        <Route path="/" element={<Home languages={languages} />} />
        <Route
          path="/programming"
          element={<LanguagesPage type="Programming" />}
        />
        <Route path="/script" element={<LanguagesPage type="Scripting" />} />
        <Route path="/query" element={<LanguagesPage type="Query" />} />
        <Route path="/detail-page/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     < Footer /> 
    </>
  );
}

export default App;
