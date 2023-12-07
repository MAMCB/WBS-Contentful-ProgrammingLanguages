import { useState } from 'react';

export const useEnvironmentVariables = () => {
    const [variables, setVariables] = useState({
        SPACE_ID: import.meta.env.VITE_SPACE_ID,
        ENVIRONMENT_NAME: import.meta.env.VITE_ENVIRONMENT_NAME,
        ACCESS_TOKEN: import.meta.env.VITE_ACCESS_TOKEN
    });

    return variables;
};