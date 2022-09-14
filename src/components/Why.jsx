import React from "react";

const Why = () => {
	return (
		<section className="why">
			<div className="why__heading-and-p">
				<h2>Why choose Easybank?</h2>
				<p className="why__first-p">
					We leverage Open Banking to turn your bank account into your
					financial hub. Control your finances like never before.
				</p>
			</div>
			<ul className="why__ul">
				<li className="why__li">
					<img src="../public/images/icon-online.svg" alt="" />
					<h3>Online Banking</h3>
					<p>
						Our modern web and mobile applications allow you to keep
						track of your finances wherever you are in the world.
					</p>
				</li>
				<li className="why__li">
					<img src="../public/images/icon-budgeting.svg" alt="" />

					<h3>Simple Budgeting</h3>
					<p>
						See exactly where your money goes each month. Receive
						notifications when you’re close to hitting your limits.
					</p>
				</li>
				<li className="why__li">
					<img src="../public/images/icon-onboarding.svg" alt="" />
					<h3>Fast Onboarding</h3>
					<p>
						We don’t do branches. Open your account in minutes
						online and start taking control of your finances right
						away.
					</p>
				</li>
				<li className="why__li">
					<img src="../public/images/icon-api.svg" alt="" />
					<h3>Open API</h3>
					<p>
						Manage your savings, investments, pension, and much more
						from one account. Tracking your money has never been
						easier.
					</p>
				</li>
			</ul>
		</section>
	);
};

export default Why;
