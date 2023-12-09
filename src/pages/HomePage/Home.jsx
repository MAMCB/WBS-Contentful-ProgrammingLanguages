import { useState, useEffect } from "react";
import "./index.css"
import Lottie from "lottie-react";
import animationData from "../../lotties/programming-animation.json";


const Home = ({ languages }) => {
  const [displayLanguage, setDisplayLanguage] = useState(null);
  const [languageToFind, setLanguageToFind] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
            <div>
              <h1>Explore the world of Programming Languages</h1>
              {/* <div className="logoSlide">
                <img
                  className="logoImages"
                  src={
                    languages[
                      Math.floor(Math.random() * (languages.length - 1))
                    ].thumbnail.fields.file.url
                  }
                  alt="logo"
                />
               
              </div> */}
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
          )}

          <input
            className="searchInput"
            type="text"
            onChange={storeValue}
            placeholder="Search for a language"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Home;
