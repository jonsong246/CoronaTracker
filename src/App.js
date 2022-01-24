import React, { useState, useEffect } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import coronaImage from './images/image.png';

const App = () => {
  const [stateData, setStateData] = useState([]);
  const [stateCountry, setStateCountry] = useState('');

  useEffect(() => {
    const fetchedData = async () => {
      const fetchedData = await fetchData();
      setStateData(fetchedData);
    }
    fetchedData();
  }, []);

    const handleCountryChange = async (stateCountry) => {
      const fetchedData = await fetchData(stateCountry);
      
      setStateCountry(stateCountry)
      setStateData(fetchedData);
      console.log(stateData);
    }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19" />
      <Cards data={stateData} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={stateData} country={stateCountry} />
    </div>
  );
};

export default App;
