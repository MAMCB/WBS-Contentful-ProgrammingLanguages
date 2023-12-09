import { useState, useEffect } from "react";



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
    <div>
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
        <div className="logoSlide">
                <img
                  className="logoImages"
                  src={
                    languages[
                      Math.floor(Math.random() * (languages.length - 1))
                    ].thumbnail.fields.file.url
                  }
                  alt="logo"
                />
               
              </div>
              </div>
      )}

      <input
        type="text"
        onChange={storeValue}
        placeholder="Search for a language"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Home;
