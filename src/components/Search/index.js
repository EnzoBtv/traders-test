import React from "react";

import Button from "../Layout/Button";

import classes from "./index.module.css";

export default function Search({ changeSearchHandler, history }) {
	return (
		<div className={classes["search-container"]}>
			<input
				onChange={evt => changeSearchHandler(evt.target.value)}
				placeholder='Pesquise por um veículo'
				className={classes["search-input"]}
			/>
			<Button onClick={() => history.push("/create")} white>
				Cadastrar
			</Button>
		</div>
	);
}
