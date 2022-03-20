import React from "react";
import Link from "next/link";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import { usePage } from "hooks/usePage";

/*
	Links to all pages of the website
*/

const linkList = [
	{
		content: "Accueil",
		icon: ["fas", "home"],
		title: "La page d'accueil du site.",
		link: "/"
	},
	{
		content: "Menu",
		icon: ["fas", "hamburger"],
		title: "Notre menu du jour !",
		link: "/menu"
	},
	{
		content: "Actus",
		icon: ["fas", "newspaper"],
		title: "PrLes dernières actualités chez Boba Bee.",
		link: "/actualites"
	},
	{
		content: "Panier",
		icon: ["fas", "shopping-cart"],
		title: "Produits ajoutés au panier.",
		link: "/panier"
	},
	{
		content: "Contacts",
		icon: ["fas", "envelope"],
		title: "Nous joindre !",
		link: "#contacts"
	}
];

const AppLinks = () => {
	const { tab } = usePage();
	const { load } = usePage();

	const mappedLinks = linkList.map((link, key) => {
		const isAnchor = link.link.substr(0, 1) === "#";
		return (
			<li
				className={ `app-links__item ${key === tab && "app-links__item--active"}` }
				key={ uuidv4() }
			>
				{isAnchor && (
					<a
						className="app-links__link"
						title={ link.title }
						href={ link.link }
					>
						<Icon className="app-links__icon mg-r-5" icon={ link.icon } />
						{ link.content }
					</a>
				)}
				{!isAnchor && (
					<Link href={ link.link } passHref>
						<a
							className="app-links__link"
							title={ link.title }
							onClick={() => {
								load(key);
							}}
						>
							<Icon className="app-links__icon mg-r-5" icon={ link.icon } />
							{ link.content }
						</a>
					</Link>
				)}
			</li>
		);
	});

	return (
		<ul className="app-links">
			{ mappedLinks }
		</ul>
	);
};

export default AppLinks;