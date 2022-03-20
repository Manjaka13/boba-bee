import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

/*
	Wave animation
*/

const Waves = () => (
	<div className="waves">
		<div className="content">
			<svg
				className="svg"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				viewBox="0 24 150 28"
				preserveAspectRatio="none"
				shapeRendering="auto"
			>
				<defs>
					<path
						id="gentle-wave"
						d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
					/>
				</defs>
				<g className="parallax">
					<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,242,79,1)" />
					<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(237,217,0,1)" />
					<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,240,60,1)" />
					<use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffeb10" />
				</g>
			</svg>
		</div>
		<div className="box w-100 h-100 f-r-ce-ce">
			<ul className="social f-r-ce-ce">
				<li className="social__item">
					<a
						className="link br-r w-60px h-60px f-r-ce-ce tr-200"
						href="https://www.facebook.com/SingerChantepie35"
						title="Visiter notre page Facebook"
					>
						<Icon icon={["fab", "facebook"]} />
					</a>
				</li>
				<li className="social__item">
					<a className="link br-r w-60px h-60px f-r-ce-ce tr-200" href="#0" title="Suivez nous sur insta !">
						<Icon icon={["fab", "instagram"]} />
					</a>
				</li>
				<li className="social__item">
					<a className="link br-r w-60px h-60px f-r-ce-ce tr-200" href="#0" title="Contactez-nous par mail">
						<Icon icon={["fas", "envelope"]} />
					</a>
				</li>
			</ul>
		</div>
	</div>
);

export default Waves;
