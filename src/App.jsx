import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Article from "./components/Article";
import Footer from "./components/Footer";

const articleData = [
	{
		author: "Claire Robinson",
		title: "Receive money in any currency with no fees",
		excerpt:
			"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
		bgImageURL: "image-currency.jpg",
	},
	{
		author: "Wilson Hutton",
		title: "Treat yourself without worrying about money",
		excerpt:
			"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
		bgImageURL: "image-restaurant.jpg",
	},
	{
		author: "Wilson Hutton",
		title: "Take your Easybank card wherever you go",
		excerpt:
			"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
		bgImageURL: "image-plane.jpg",
	},
	{
		author: "Claire Robinson",
		title: "Our invite-only Beta accounts are now live!",
		excerpt:
			"After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
		bgImageURL: "image-confetti.jpg",
	},
];

function App() {
	const [showMobileNav, setShowMobileNav] = useState(false);

	return (
		<div className={`App ${showMobileNav ? "fixed" : ""}`}>
			{showMobileNav && <MobileNav />}
			<Header
				showMobileNav={showMobileNav}
				setShowMobileNav={setShowMobileNav}
			/>
			<Hero />
			<Why />
			<section className="latest-articles">
				<h2>Latest Articles</h2>
				<ul className="article-container">
					{articleData.map((articleObj) => (
						<Article obj={articleObj} />
					))}
				</ul>
			</section>
			<Footer />
		</div>
	);
}

export default App;
