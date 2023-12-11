import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEntryById } from "../../hooks/useEntryById";

const DetailPage = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);
  const entryData = useEntryById(id);

  useEffect(() => {
    if (entryData) {
      setEntry(entryData);
    }
  }, [entryData]);

  if (!entry) {
    return <div>Loading...</div>; // Display a loading state while fetching data
  }
  
  if (!entry.fields) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>{entry.fields.name}</h2>
      <h3>{entry.fields.type}</h3>
      <p>{entry.fields.description}</p>
      <p>{entry.fields.useCase}</p>
    </>
  );
};

export default DetailPage;
