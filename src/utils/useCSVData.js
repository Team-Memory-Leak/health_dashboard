// src/utils/useCSVData.js
import Papa from "papaparse";
import { useEffect, useState } from "react";

const useCSVData = (csvPath) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(csvPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true, // Use first row as keys
          skipEmptyLines: true, // Skip empty lines
          complete: (results) => {
            setData(results.data);
            setLoading(false);
          },
          error: (err) => {
            setError(err);
            setLoading(false);
          },
        });
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [csvPath]);

  return { data, loading, error };
};

export default useCSVData;
