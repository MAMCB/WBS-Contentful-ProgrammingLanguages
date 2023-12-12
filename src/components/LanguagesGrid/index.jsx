import React from "react";
import ItemCard from "../ItemCard";
import { useFilteredEntries } from "../../hooks/useFilteredEntries";

const LanguagesGrid = ({ type }) => {
  const uppercaseType = type.charAt(0).toUpperCase() + type.slice(1);

  const entries = useFilteredEntries({
    searchQuery: `${uppercaseType}`,
    fieldToFilter: "type",
    content_type: "language",
  });

  console.log(entries)

  return (
    <>
      {entries &&
        entries.map((item) => (
          <ItemCard key={item.sys.id} fields={item.fields} id={item.sys.id} />
        ))}
    </>
  );
};

export default LanguagesGrid;
