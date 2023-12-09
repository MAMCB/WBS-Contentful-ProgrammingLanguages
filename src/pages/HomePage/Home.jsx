import { useState, useEffect } from "react";
import "./index.css"
import Gif from "../../GIF/Animation - 1702113065510.gif";



const Home = ({ languages }) => {
  const [displayLanguage, setDisplayLanguage] = useState(null);
  const [languageToFind, setLanguageToFind] = useState("");



  const handleSearch = (e) => {
    console.log(languageToFind);
    const languageToDisplay = languages.find(
      (language) => language.name.toLowerCase() === languageToFind
    );

    languageToDisplay
      ? setDisplayLanguage(languageToDisplay)
      : alert("Could not find that language " + languageToDisplay + languageToFind );
  };

  const storeValue = (e) => {
    console.log(e.target.value);
    setLanguageToFind(e.target.value.toLowerCase());
  };
  return (
    <>
      {languages.length > 0 ? (
        <div className="home">
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
            <div className="hero">
              <h1>
               Explore the Universe of <br/> <span>Programming  <br/>Languages</span>
              </h1>
              <div className="logoSlide">
                 {/* <img
                  className="logoImages"
                  src={
                    languages[
                      Math.floor(Math.random() * (languages.length - 1))
                    ].thumbnail.fields.file.url
                  }
                  alt="logo"
                />  */}
                <img id="gif" src={Gif} alt="gif animation" />
              </div>
            </div>
          )}
          <div className="input-elements">
            <input
              className="searchInput"
              type="text"
              onChange={storeValue}
              placeholder="Search for a language"
            />
            <button id="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Home;
