import React from "react";

import classes from "./index.module.css";
export default function Home({ history }) {
  return (
    <div className={classes["home-container"]}>
      <div className={classes["search-container"]}>
        <input
          placeholder="Pesquise por um veículo"
          className={classes["search-input"]}
        />
        <button className={classes["search-button"]}>Cadastrar</button>
      </div>
      <div className={classes["list-container"]}>
        <div className={classes["text-container"]}>
          <span className={classes["text"]}>
            Pesquisa de veículos <br />
            do <span className={classes["special-text"]}>TradersClub</span>
          </span>
        </div>
      </div>
    </div>
  );
}
