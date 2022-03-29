import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

// Represents a boba drink card

const BobaCard = () => (
	<div className="boba-card pd-10 f-r-be-ce tr-200">
		<div className="boba-card__head f-r-st-ce">
			<div className="boba-card__representation w-70px h-70px br-r o-h bg-t tr-200">
				<img
					className="image w-100"
					src="/images/milktea/milktea1.png"
					alt="Milktea"
				/>
			</div>
			<p className="boba-card__title fs-120 pd-l-10">Milktea</p>
		</div>
		<div className="f-r-st-ce">
			<button
				className="view pd-5 pd-r-10 pd-l-10 b br-10 tr-200 p mg-r-10 fs-150"
				title="Agrandir"
			>
				<Icon icon={["fas", "search-plus"]} />
			</button>
			<button
				className="add-cart pd-10 pd-l-20 pd-r-20 white b br-5 tr-200 p mg-r-10 bg-green"
				title="Ajouter au panier"
			>
				<Icon icon={["fas", "shopping-cart"]} /> Ajouter
			</button>
		</div>
		<p className="boba-card__price fs-120 b">13 000 Ar</p>
	</div>
);

export default BobaCard;
