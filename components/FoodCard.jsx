import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Card for food item
*/

const FoodCard = () => (
	<article
		className="food-card bg-white o-h f-c-st-en tr-200"
		style={{
			background: "url(/images/menu/boba.png) center center no-repeat",
			backgroundSize: "cover"
		}}
	>
		<p className="food-card__view w-100 tx-r">
			<button
				className="view pd-5 pd-r-10 pd-l-10 white b br-10 tr-200 p mg-10 fs-150"
				title="Agrandir"
			>
				<Icon icon={ ["fas", "search-plus"] } />
			</button>
		</p>
		<div className="food-card__info w-100 f-r-ce-be tr-200">
			<div className="about">
				<h3 className="food-card__title white pd-10">Salade et steak avec poivre vert</h3>
				<p className="food-card__price pd-10 pd-t-0 lime b fs-180">12 000 Ar</p>
			</div>
			<p className="cart h-100 f-c-en-ce">
				<button
					className="add-cart pd-10 pd-l-20 pd-r-20 white b br-5 tr-200 p mg-r-10 bg-green"
					title="Ajouter au panier"
				>
					<Icon icon={ ["fas", "shopping-cart"] } /> Panier
				</button>
			</p>
		</div>
	</article>
);

export default FoodCard;