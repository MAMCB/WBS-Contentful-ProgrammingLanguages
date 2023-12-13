import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEntryById } from "../../hooks/useEntryById";
import "./index.css";

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
    return <div className="loader"></div>; // Display a loading state while fetching data
  }

  if (!entry.fields) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <div className="detail-page-container">
        <div className="detail-page">
          <img
            className="detail-page__image"
            src={entry.fields.thumbnail.fields.file.url}
          />
          <div className="detail-page__info-container">
            <h2>{entry.fields.name}</h2>
            <h4>{entry.fields.type}</h4>
            <p>{entry.fields.description}</p>
            <p>{entry.fields.useCase}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
