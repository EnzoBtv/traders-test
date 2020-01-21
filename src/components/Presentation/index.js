import React from "react";

import classes from "./index.module.css";

export default function Presentation() {
	return (
		<div className={classes["text-container"]}>
			<span className={classes["text"]}>
				Pesquisa de veículos <br />
				do <span className={classes["special-text"]}>TradersClub</span>
			</span>
		</div>
	);
}
