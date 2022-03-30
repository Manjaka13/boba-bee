import React from "react";

// Ad for mobile app

const MobileApp = () => (
	<div className="mobile-app">
		<div className="container f-r-ce-ce">
			<img
				className="mobile-app__phone mg-r-20"
				src="/images/app.png"
				alt="Mobile app"
			/>
			<div className="mg-l-20">
				<h2 className="text white">Très bientôt sur toutes les plateformes...</h2>
				<h3 className="title text fs-400 pd-b-20 pd-t-20 t">
					L&apos;application Boba Bee !
				</h3>
				<div className="download-buttons f-r-st-ce pd-t-20">
					<img
						className="download p mg-r-10"
						src="/images/google-play.png"
						alt="Google Play Store"
						title="Bientôt disponible sur Google Play Store !"
					/>
					<img
						className="download p mg-l-10"
						src="/images/appstore.png"
						alt="Apple store"
						title="Bientôt disponible sur Apple Store !"
					/>
				</div>
			</div>
		</div>
	</div>
);

export default MobileApp;
