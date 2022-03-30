import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Card for a snack
*/

const SnackCard = ({ snack }) => (
	<article
		className="snack-card bg-white o-h f-c-st-en tr-200"
		style={{
			background: `url(${snack.image}) center center no-repeat`,
			backgroundSize: "cover",
		}}
	>
		<p className="snack-card__view w-100 tx-r">
			<button
				className="view pd-5 pd-r-10 pd-l-10 white b br-10 tr-200 p mg-10 fs-150"
				title="Agrandir"
			>
				<Icon icon={["fas", "search-plus"]} />
			</button>
		</p>
		<div className="snack-card__info w-100 tr-200">
			<h3 className="snack-card__title white pd-10 pd-b-0">{snack.name}</h3>
			<div className="snack-card__about f-r-be-ce pd-10">
				<p className="snack-card__price pd-10 pd-t-0 lime b fs-180">
					{snack.price}
				</p>
				<p className="cart h-100 f-c-en-ce">
					<button
						className="add-cart pd-10 pd-l-20 pd-r-20 white b br-5 tr-200 p mg-r-10 bg-green"
						title="Ajouter au panier"
					>
						<Icon icon={["fas", "shopping-cart"]} /> Ajouter
					</button>
				</p>
			</div>
		</div>
	</article>
);

export default SnackCard;
