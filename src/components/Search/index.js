import React from "react";

import classes from "./index.module.css";

export default function Search({ changeSearchHandler, history }) {
	return (
		<div className={classes["search-container"]}>
			<input
				onChange={evt => changeSearchHandler(evt.target.value)}
				placeholder='Pesquise por um veículo'
				className={classes["search-input"]}
			/>
			<button onClick={() => history.push("/create")} className={classes["search-button"]}>
				Cadastrar
			</button>
		</div>
	);
}
