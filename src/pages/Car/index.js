import React, { useState } from "react";

import Button from "../../components/Layout/Button";
import InputContainer from "../../components/Layout/InputContainer";
import Input from "../../components/Layout/Input";

import classes from "./index.module.css";
export default function Home({ history }) {
	const [title, setTitle] = useState("");
	const [model, setModel] = useState("");
	const [year, setYear] = useState("");
	const [brand, setBrand] = useState("");
	const [color, setColor] = useState("");
	const [price, setPrice] = useState("");
	const [km, setKm] = useState("");

	return (
		<div className={classes["form-container"]}>
			<InputContainer>
				<Input large placeholder='Título' />
			</InputContainer>
			<InputContainer double>
				<Input medium placeholder='Modelo' />
				<Input type='number' medium placeholder='Ano' />
			</InputContainer>
			<InputContainer>
				<Input large select placeholder='Marca'>
					<option value='' disabled selected>
						Selecione uma opção
					</option>
				</Input>
			</InputContainer>
			<InputContainer double>
				<Input medium placeholder='Cor' />
				<Input type='number' medium placeholder='Preço' />
			</InputContainer>
			<InputContainer className={classes["base-input-container"]}>
				<Input medium placeholder='Kilometragem' />
			</InputContainer>
			<div className={classes["button-container"]}>
				<div>
					<Button transparent>Remover</Button>
					<Button transparent>Cancelar</Button>
				</div>
				<div>
					<Button white>Salvar</Button>
				</div>
			</div>
		</div>
	);
}
