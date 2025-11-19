import { useState, useEffect } from "react";
import { getDevTools, postDevTool } from "../../services/devtools";

export function useDeveloperTools() {
  const [developerTools, setDeveloperTools] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadDevTools() {
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
    loadDevTools();
  }, []);

  async function createDevTool(payload) {
    try {
      const created = await postDevTool(payload);
      setDeveloperTools((prev) => [...prev, created]);
      return created;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  }

  return { developerTools, loading, error, createDevTool };
}