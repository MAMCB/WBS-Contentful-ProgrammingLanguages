import React, { useEffect, useState } from "react";
import LanguagesGrid from "../../components/LanguagesGrid";
import { useParams } from "react-router-dom";

const LanguagesPage = () => {
  const { type: routeType } = useParams();
  const [type, setType] = useState(routeType);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setType(routeType);
    setKey((prevKey) => prevKey + 1);
  }, [routeType]);

  return <LanguagesGrid type={type} key={key} />;
};

export default LanguagesPage;
)