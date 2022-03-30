import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import SnackCard from "./SnackCard";

/*
	List of snacks
*/

const snackList = [
	{
		id: uuidv4(),
		name: "Nems (10 pcs)",
		image: "/images/menu/Nems.png",
		price: "4 000 Ar",
	},
	{
		id: uuidv4(),
		name: "Omelette sur légumes",
		image: "/images/menu/omelette-legumes.png",
		price: "6 000 Ar",
	},
	{
		id: uuidv4(),
		name: "Poulet grillé",
		image: "/images/menu/poulet-grille.png",
		price: "11 000 Ar",
	},
	{
		id: uuidv4(),
		name: "Salade roquette et  citron",
		image: "/images/menu/salade-roquette-citron.png",
		price: "8 000 Ar",
	},
	{
		id: uuidv4(),
		name: "Viande à la sauce tomate",
		image: "/images/menu/viande-sauce-tomate.jpg",
		price: "9 000 Ar",
	},
	{
		id: uuidv4(),
		name: "Vin Maroparasy",
		image: "/images/menu/vin-maroparasy.jpg",
		price: "12 000 Ar",
	},
];

const SnackList = () => {
	const mappedSnacks = snackList.map((snack) => (
		<li key={uuidv4()}>
			<SnackCard snack={snack} />
		</li>
	));

	return (
		<div className="snack-list pd-t-40 pd-b-40">
			<div className="container">
				<h2 className="fs-300 pd-b-20">
					<Icon icon={["fas", "burger"]} /> Snacks et Soda
				</h2>
				<ul className="snack-list__array w-100">{mappedSnacks}</ul>
			</div>
		</div>
	);
};

export default SnackList;
