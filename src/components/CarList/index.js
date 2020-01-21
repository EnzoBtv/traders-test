import React from "react";

import classes from "./index.module.css";

export default function CarsList({ cars }) {
	return (
		<div className={classes["list-container"]}>
			{cars.map(car => (
				<div key={car.id} className={classes["list-item-container"]}>
					<div className={classes["list-text-container"]}>
						<span className={classes["title-item"]}>{car.title}</span>
						<span className={classes["title-item"]}>{car.price}</span>
					</div>
					<div className={classes["list-text-container"]}>
						<span className={classes["subtitle-item"]}>
							{car.model} - {car.brand} - {car.km}
						</span>
						<span className={classes["subtitle-item"]}>{car.year}</span>
					</div>
					<hr />
				</div>
			))}
		</div>
	);
}
