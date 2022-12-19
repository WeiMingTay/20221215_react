import React, { useState } from "react";
import "./ShowText.css";

const ShowText = () => {
	let [shown, setShown] = useState(false);

	function showMe() {
		if (shown) {
			setShown(false);
		}
		if (!shown) {
			setShown(true);
		}
	}
	return (
		<article className="showText">
			<h2>Show Text</h2>
			<div>
				<button onClick={showMe}>Show</button>
				<p style={!shown ? { display: "none" } : { display: "block" }}>TEXT</p>
			</div>
		</article>
	);
};

export default ShowText;
