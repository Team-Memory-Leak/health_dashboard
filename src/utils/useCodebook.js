import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

const useCodebook = (codebookPath) => {
  const [lookup, setLookup] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(codebookPath)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load codebook: ${res.status}`);
        return res.arrayBuffer();
      })
      .then((arrayBuffer) => {
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // raw rows

        const map = {};
        let currentVar = null;
        for (let i = 0; i < rows.length; i++) {
          const [varName, value, label] = rows[i];
          if (varName && varName !== "Value") {
            currentVar = varName;
            if (!map[currentVar]) map[currentVar] = {};
          }
          if (currentVar && value !== undefined && label) {
            map[currentVar][String(value)] = label;
          }
        }

        setLookup(map);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [codebookPath]);

  return { lookup, loading, error };
};

export default useCodebook;