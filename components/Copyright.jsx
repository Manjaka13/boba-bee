import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { WEBSITE_NAME } from "helpers/const";

const Copyright = () => (
	<div className="copyright f-r-ce-ce pd-t-10 pd-b-10 bg-t n-s">
		<p className="left tx-r pd-r-10 white b">
			Fait avec <Icon className="red" icon={ ["fas", "heart"] } /> par <a className="link tr-200" href="#0" title="Développeur">Hari</a>.
		</p>
		<p className="right tx-l pd-l-10 white b">
			{ WEBSITE_NAME }, Copyright © 2021 - { new Date().getFullYear() }
		</p>
	</div>
);

export default Copyright;
