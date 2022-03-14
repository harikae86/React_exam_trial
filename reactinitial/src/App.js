import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import LoadingMask from "./components/LoadingMask";
import Subscription from "./components/Subscription";
import "./style.css";

const fetchCharacters = async () => {
  const response = await fetch(
    "https://demoapi.com/api/series/howimetyourmother"
  );
  const data = await response.json();
  return data;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    document.title = "Series Api";
    console.log(loading);
    setLoading(true);
    fetchCharacters().then((data) => {
      console.log(data);
      setCharacters(data);
      setLoading(false);
    });

    setTimeout(() => {
      setShowComponent(true);
    }, 10000);
  }, []);

  return (
    <>
      {loading ? <LoadingMask /> : <Home characters={characters} />}
      {showComponent && <Subscription />}
    </>
  );
};

export default App;
