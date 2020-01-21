import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Sidebar from "../Sidebar";
import Home from "../../pages/Home";
import Car from "../../pages/Car";
import "../../assets/styles/Shared.css";

export default class App extends Component {
	render() {
		return (
			<>
				<ToastContainer autoClose={7000} pauseOnFocusLoss={false} pauseOnHover={false} />
				<Sidebar />
				<Router>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/create/:id?' component={Car} />
					</Switch>
				</Router>
			</>
		);
	}
}
