import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { useEnvironmentVariables } from "./useEnvironmentVariables";

export const useAllEntries = () => {
  const { SPACE_ID, ACCESS_TOKEN } = useEnvironmentVariables();
  const [allEntries, setAllEntries] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    });

    client.getEntries().then((entries) => {
      if (entries.items) {
        setAllEntries(entries.items);
      }
    }).catch((error) => {
      console.error("Error fetching entries:", error);
    });
  }, []);
  
  return allEntries;
};