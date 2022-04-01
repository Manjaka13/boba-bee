import React, { Fragment } from "react";
import Heading from "components/Heading";
import Page from "components/Page";
import { PageProvider } from "hooks/usePage";
import SnackList from "components/SnackList";
import BobaList from "components/BobaList";

/*
	Restaurant's menu
*/

const Carte = () => (
	<PageProvider defaultTab={1}>
		<Heading title="Notre carte du jour" image="/imagescovers/carte.jpg">
			Consultez notre menu et séléctionnez ce qui est à votre goût !
		</Heading>
		<Page>
			<Fragment>
				<BobaList />
				<SnackList />
			</Fragment>
		</Page>
	</PageProvider>
);

export default Carte;
