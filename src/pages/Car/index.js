import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { Client } from "../../util/http";

import { Brands } from "../../contexts/Brands";

import Button from "../../components/Layout/Button";
import InputContainer from "../../components/Layout/InputContainer";
import Input from "../../components/Layout/Input";

import classes from "./index.module.css";
export default function Car({
	history,
	match: {
		params: { id }
	}
}) {
	const brands = useContext(Brands);
	const [title, setTitle] = useState("");
	const [model, setModel] = useState("");
	const [year, setYear] = useState("");
	const [brand, setBrand] = useState("");
	const [color, setColor] = useState("");
	const [price, setPrice] = useState("");
	const [km, setKm] = useState("");

	async function saveCar() {
		if (!title || !model || !year || !brand || !color || !price || km === undefined || km === null || km === "") {
			return toast.error("Por favor, preencha todos os campos");
		}

		let method = id ? "put" : "post";
		let url = id ? `/cars/${id}` : "/cars";

		if (process.env.REACT_APP_ENVIRONMENT === "production") {
			await Client[method](url, {
				car: {
					title,
					model,
					year,
					brand,
					color,
					price,
					km
				}
			});
			toast.success("Carro adicionado com sucesso");
		}
		history.push("/");
	}

	async function removeCar() {
		if (process.env.REACT_APP_ENVIRONMENT === "production") {
			await Client.delete(`/cars/${id}`);
			toast.success("Carro removido com sucesso");
		}
		history.push("/");
	}

	return (
		<div className={classes["form-container"]}>
			<InputContainer>
				<Input value={title} onChange={evt => setTitle(evt.target.value)} large placeholder='Título' />
			</InputContainer>
			<InputContainer double>
				<Input value={model} onChange={evt => setModel(evt.target.value)} medium placeholder='Modelo' />
				<Input value={year} onChange={evt => setYear(evt.target.value)} type='number' medium placeholder='Ano' />
			</InputContainer>
			<InputContainer>
				<Input value={brand} onChange={evt => setBrand(evt.target.value)} large select placeholder='Marca'>
					<option value='' disabled selected>
						Selecione uma opção
					</option>
					{brands.map(brand => (
						<option key={brand.id}>{brand.name}</option>
					))}
				</Input>
			</InputContainer>
			<InputContainer double>
				<Input value={color} onChange={evt => setColor(evt.target.value)} medium placeholder='Cor' />
				<Input value={price} onChange={evt => setPrice(evt.target.value)} type='number' medium placeholder='Preço' />
			</InputContainer>
			<InputContainer className={classes["base-input-container"]}>
				<Input value={km} onChange={evt => setKm(evt.target.value)} medium placeholder='Kilometragem' />
			</InputContainer>
			<div className={classes["button-container"]}>
				<div>
					{id ? (
						<Button onClick={removeCar} transparent>
							Remover
						</Button>
					) : null}
					<Button onClick={() => history.push("/")} transparent>
						Cancelar
					</Button>
				</div>
				<div>
					<Button onClick={saveCar} white>
						Salvar
					</Button>
				</div>
			</div>
		</div>
	);
}
