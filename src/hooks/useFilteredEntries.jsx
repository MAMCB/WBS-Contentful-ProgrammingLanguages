import { useState, useEffect } from "react";
import { createClient } from "contentful";
import { useEnvironmentVariables } from "./useEnvironmentVariables";

export const useFilteredEntries = ({
  searchQuery,
  fieldToFilter,
  content_type,
}) => {
  const { SPACE_ID, ACCESS_TOKEN } = useEnvironmentVariables();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    });

    client
      .getEntries({
        content_type: content_type,
        [`fields.${fieldToFilter}`]: searchQuery,
      })
      .then((entries) => {
        if (entries.items) {
          setEntries(entries.items);
        }
      })
      .catch((error) => {
        console.log("Error fetching entries", error);
      });
  }, [searchQuery]);

  return entries;
};
