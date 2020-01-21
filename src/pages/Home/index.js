import React, { useState } from "react";

import Search from "../../components/Search";
import Presentation from "../../components/Presentation";
import CarsList from "../../components/CarList";

import { Client } from "../../util/http";

import classes from "./index.module.css";
export default function Home({ history, getSelectedCar }) {
  const [search, setSearch] = useState("");
  const [cars, setCars] = useState(
    process.env.REACT_APP_ENVIRONMENT === "production"
      ? []
      : [
          {
            id: 1,
            title: "Celta Azul 2005 Ar e Direção",
            model: "Celta",
            brand: "Chevrolet",
            year: 2005,
            color: "Azul marinho",
            km: 106041,
            price: 11772.22
          }
        ]
  );

  async function changeSearchHandler(value) {
    try {
      if (value && process.env.REACT_APP_ENVIRONMENT === "production") {
        const result = Client.get(`/cars?search=${value}`);
        setCars(result.cars);
      }
    } catch (ex) {
      console.log(ex.message);
    }
    setSearch(value);
  }

  return (
    <div className={classes["home-container"]}>
      <Search history={history} changeSearchHandler={changeSearchHandler} />
      <div className={classes["list-container"]}>
        {!search ? (
          <Presentation />
        ) : (
          <CarsList
            getSelectedCar={getSelectedCar}
            cars={cars}
            history={history}
          />
        )}
      </div>
    </div>
  );
}
