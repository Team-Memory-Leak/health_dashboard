import Papa from "papaparse";
import { useEffect, useState } from "react";

const useCodebook = (codebookPath) => {
  const [lookup, setLookup] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(codebookPath)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load codebook: ${res.status}`);
        return res.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const data = results.data;
            const map = {};
            data.forEach(
              ({ "Field Name": field, Code: code, Label: label }) => {
                if (!map[field]) map[field] = {};
                map[field][code] = label;
              },
            );
            setLookup(map);
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
  }, [codebookPath]);

  return { lookup, loading, error };
};

export default useCodebook;
