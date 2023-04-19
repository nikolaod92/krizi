import { useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

import { useState } from "react";

const useFetch = (config: AxiosRequestConfig) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Here");
        const response = await axios(config);
        setData(response.data);
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
      fetchData();
    };
  }, []);

  return { loading, data, error };
};

export default useFetch;
