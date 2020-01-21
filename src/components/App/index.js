import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Sidebar from "../Sidebar";
import Home from "../../pages/Home";
import Car from "../../pages/Car";
import "../../assets/styles/Shared.css";

export default function App() {
	const [car, setCar] = useState();

	function getSelectedCar(selected) {
		setCar(selected);
	}

	return (
		<>
			<ToastContainer autoClose={7000} pauseOnFocusLoss={false} pauseOnHover={false} />
			<Sidebar />
			<Router>
				<Switch>
					<Route exact path='/' render={({ history }) => <Home history={history} getSelectedCar={getSelectedCar} />} />
					<Route exact path='/create/:id?' render={({ history, match }) => <Car match={match} history={history} car={car} />} />
				</Switch>
			</Router>
		</>
	);
}
