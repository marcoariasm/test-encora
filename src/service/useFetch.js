import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchSingle = async () => {
    try {
      const data = await fetch("https://rickandmortyapi.com/api/character/2");
      const response = await data.json();
      // if (!response) return;
      // else {
      console.log(response);
      setData(response);
      setLoading(false);
      // }
    } catch (error) {
      setError(error);
      setLoading(true);
    }
  };

  fetchSingle();
  // useEffect(() => {
  // }, []);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
