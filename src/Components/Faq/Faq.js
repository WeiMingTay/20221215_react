import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
	const [activeClass, setActiveClass] = useState("hidden");

	const toggleFaq = () => {
		setActiveClass(activeClass === "hidden" ? "show" : "hidden");
	};
	return (
		<article className="faq">
			<h2>lev1_2</h2>
			<div>
				<div>
					<p>Why is React great?</p>
					<button onClick={toggleFaq}>{activeClass === "hidden" ? "+" : "-"}</button>
				</div>
				<div className={activeClass}>
					<p>Fast Learning Curve</p>
				</div>
			</div>
		</article>
	);
};

export default Faq;
