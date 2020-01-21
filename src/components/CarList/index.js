import React from "react";
import Currency from "react-currency-formatter";
import classes from "./index.module.css";

export default function CarsList({ cars, history, getSelectedCar }) {
	function selectCar(car) {
		getSelectedCar(car);
		history.push(`/create/${car.id}`);
	}

	return (
		<div className={classes["list-container"]}>
			{cars.map(car => (
				<div onClick={() => selectCar(car)} key={car.id} className={classes["list-item-container"]}>
					<div className={classes["list-text-container"]}>
						<span className={classes["title-item"]}>{car.title}</span>
						<span className={classes["title-item"]}>
							<Currency
								quantity={car.price} // Required
								currency='BRL'
								decimal=','
								group='.'
							/>
						</span>
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
