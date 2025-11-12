import { useState, useEffect } from "react";
import getDevTools from "../services/devtools";

function useDeveloperTools() {
    const [developerTools, setDeveloperTools] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function DeveloperTools() {
            try {
                setloading(true);
                const data = await getDevTools();

                setDeveloperTools(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setloading(false);
            }
        }
        DeveloperTools();
    }, []);
    return { developerTools, loading, error } ;
}
export default useDeveloperTools
