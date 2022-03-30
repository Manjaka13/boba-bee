import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import BobaCard from "./BobaCard";

// List of boba drinks

const bobaList = ["test", "test", "test", "test", "test"];

const BobaList = () => {
	const mappedBobas = bobaList.map(() => <BobaCard key={uuidv4()} />);

	return (
		<div className="boba-list pd-t-40">
			<div className="container">
				<div className="boba-list__container w-100 o-h f-r-st-st bg-white">
					<div
						className="boba-list__shipping w-40 h-100 o-h f-c-ce-ce"
						style={{
							background: "url(/images/shipping.jpg) center center no-repeat",
							backgroundSize: "cover",
						}}
					>
						<h2 className="title white pd-10 fs-170 f-r-st-ce">
							<div className="icon w-50px h-50px o-h f-r-ce-ce br-r bg-t mg-r-10">
								<Icon icon={["fas", "shipping-fast"]} />
							</div>
							Se faire livrer ?
						</h2>
						<p className="text pd-10 br-5 mg-r-10 mg-l-10 white tx-j">
							Les livraisons sont disponibles uniquement pour Antananarivo ville.
							Commander votre nourriture sur cette page, puis dans votre panier vous
							séléctionnez &rdquo;<span className="b">Livraison</span>&rdquo; et
							spécifiez l&apos;endroit de livraison, une fois le paiement établi, nous
							vous le livrerons dans les plus brefs délais.
						</p>
						<p className="agenda w-100 white tx-c pd-t-5 pd-b-5">
							<Icon icon={["fas", "clock"]} /> Du Lundi au Samedi, de 08h à 18h
						</p>
					</div>
					<div className="boba-list__list w-60 h-100 o-h f-c-st-st">
						<h2 className="title fs-170 tx-c pd-t-10 pd-b-10 w-100">
							<Icon icon={["fas", "glass-water"]} /> Bubble Tea
						</h2>
						<div className="boba-list__separator w-40 bg-t br-5 tr-700"></div>
						<div className="boba-list__menu o-a w-100">{mappedBobas}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BobaList;
