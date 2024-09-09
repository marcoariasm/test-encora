import React, { useEffect, useState } from "react";
import useFetch from "../service/useFetch";

const Home = () => {
  const { data } = useFetch();

  return <div>{data && <h1>{data.name}</h1>}</div>;
};

export default Home;
