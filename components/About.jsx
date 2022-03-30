import React from "react";

// About boba bee

const About = () => (
	<div className="about">
		<div className="container">
			<div className="about__container w-100 f-r-ce-ce">
				<div className="about__frame o-h bg-white">
					<img className="image" src="/images/about.jpg" alt="Boba drink" />
				</div>
				<div className="about__content pd-l-40">
					<h2 className="pd-l-20">Que servons nous ?</h2>
					<h3 className="pd-20 pd-t-10 pd-b-0 fs-250">
						Votre péché mignon favori !
					</h3>
					<p className="tx-j pd-20">
						Dard dummy text ever since the 1500s,when an unknown printer took a galley
						of type and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesettingdard
						dummy text ever since the 1500s,when an unknown printer took a galley of
						type and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default About;
