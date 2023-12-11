import { createClient } from "contentful";
import { useEnvironmentVariables } from "./useEnvironmentVariables";
import { useState, useEffect } from 'react';

export const useEntryById = ( entryId) => { 
  const { SPACE_ID, ACCESS_TOKEN } = useEnvironmentVariables();
  const [entry, setEntry] = useState({});

  useEffect(() => {
    const client = createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    });

    client
      .getEntry(entryId)
      .then((entry) => setEntry(entry))
      .catch((error) => console.error(error))
  }, []);

  return entry;
};
