import React, { Fragment } from "react";
import Heading from "components/Heading";
import Page from "components/Page";
import CoverHome from "components/CoverHome";
import FoodCard from "components/FoodCard";
import { PageProvider } from "hooks/usePage";

/*
	HomePage
*/

const HomePage = () => (
	<PageProvider defaultTab={ 0 }>
		<Heading
			title="Boba Bee, taste like honey pearl !"
			image="/images/bobabee-logo.png"
		>
			Bienvenue sur le site officiel de Boba Bee, parcourez notre liste de produits.
		</Heading>
		<Page>
			<Fragment>
				<CoverHome />
				<FoodCard />
			</Fragment>
		</Page>
	</PageProvider>
);

export default HomePage;
