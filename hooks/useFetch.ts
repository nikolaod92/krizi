import React, { useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";

import { useState } from "react";

const useFetch = (config) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Here");
        const response = await axios(config);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { loading, data, error };
};

export default useFetch;
