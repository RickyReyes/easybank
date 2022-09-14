import React from "react";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero__right">
				<img
					className="hero__svg-mobile"
					src="../public/images/bg-intro-mobile.svg"
					alt=""
				/>
				<img
					className="hero__svg-desktop"
					src="../public/images/bg-intro-desktop.svg"
					alt=""
				/>
				<img
					className="hero__mockups"
					src="../public/images/image-mockups.png"
					alt=""
				/>
			</div>
			<div className="hero__left">
				<h1>Next generation digital banking</h1>
				<p>
					Take your financial life online. Your Easybank account will
					be a one-stop-shop for spending, saving, budgeting,
					investing, and much more.
				</p>
				<button>Request Invite</button>
			</div>
		</div>
	);
};

export default Hero;
