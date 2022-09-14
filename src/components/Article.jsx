import React from "react";

const Article = ({ obj }) => {
	return (
		<li className="article">
			<div
				style={{
					backgroundImage: `url(../public/images/${obj.bgImageURL})`,
				}}
				className="article__photo"
			></div>
			<div className="article__body">
				<small>By {obj.author}</small>
				<h4>{obj.title}</h4>
				<p>{obj.excerpt}</p>
			</div>
		</li>
	);
};

export default Article;
