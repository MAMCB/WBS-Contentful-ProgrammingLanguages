import React from "react";
import LanguagesGrid from "../../components/LanguagesGrid";
import { useFilteredEntries } from "../../hooks/useFilteredEntries";

const LanguagesPage = ({ type }) => {

  const filteredEntries = useFilteredEntries({
    searchQuery: `${type}`,
    fieldToFilter: "type",
    content_type: 'language'
  });

  console.log(filteredEntries);

  return (<LanguagesGrid entries={filteredEntries} />)
};

export default LanguagesPage;
