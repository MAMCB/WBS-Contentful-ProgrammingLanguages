import React, { useEffect, useState } from "react";
import LanguagesGrid from "../../components/LanguagesGrid";
import { useParams } from "react-router-dom";
import "./index.css";

const LanguagesPage = () => {
  const { type: routeType } = useParams();
  const [type, setType] = useState(routeType);

  useEffect(() => {
    setType(routeType);
  }, [routeType]);

  return (
    <div className="languages-page">
      <LanguagesGrid type={type} />
    </div>
  );
};

export default LanguagesPage;
