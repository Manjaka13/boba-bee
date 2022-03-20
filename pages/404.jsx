import React from "react";
import Link from "next/link";
import Heading from "components/Heading";
import Page from "components/Page";
import { PageProvider } from "hooks/usePage";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { usePage } from "hooks/usePage";

/*
	Homepage
*/

const Homepage = () => {
	const { load } = usePage();

	return (
		<PageProvider>
			<Heading
				title="Contenu introuvable"
				image="/images/covers/404.jpg"
			>
				Le contenu auquel vous voulez accéder est introuvable.
			</Heading>
			<Page>
				<div className="not-found w-100 o-h f-c-ce-ce">
					<div className="not-found__window w-30 br-10 bg-white">
						<h2 className="pd-20">
							<Icon icon={ ["fas", "exclamation-circle"] } /> Oups, contenu introuvable
						</h2>
						<div className="not-found__separator bg-t w-30 mg-l-20"></div>
						<p className="tx-j pd-20">
							Il semblerait que le contenu/page que vous voulez accéder n'existe pas ou a été supprimé, veuillez vérifier que l'url est correct et reéssayer. Si le problème persiste, contacez un admnistrateur.
						</p>
						<p className="tx-c  pd-t-20 pd-b-40">
							<Link href="/" passHref>
								<a
									className="back pd-10 pd-r-20 pd-r-20 bg-green white br-5 tr-200"
									title="Retour à l'accueil"
									onClick={() => {
										if(typeof load === "function")
											load(0);
									}}
								>
									<Icon icon={ ["fas", "home"] } /> Revenir en lieu sûr
								</a>
							</Link>
						</p>
					</div>
				</div>
			</Page>
		</PageProvider>
	);
}

export default Homepage;
