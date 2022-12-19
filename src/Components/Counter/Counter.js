import React, { useState, useRef } from "react";

import "./Counter.css";

const Counter = () => {
	const pRef = useRef(null);
	let [count, setCount] = useState(0);
	let [fontSize, setFontSize] = useState(1.5)

	function plus() {
		setCount(count + 1);
		setFontSize(fontSize + 0.05)
		pRef.current.style.fontSize = fontSize + "rem";
		pRef.current.style.textShadow="0 0 "+count+"px black";
	}

	function minus() {
		setCount(count - 1);
		setFontSize(fontSize - 0.05)
		pRef.current.style.fontSize = fontSize + "rem";
		pRef.current.style.textShadow="0 0 "+count+"px black";
	}

	/* 	let displayCount = document.querySelector(".displayCount");

	if (count > 0) {
		displayCount.style.color = "green";
		displayCount.style.display = "block";
	} else if (count < 0) {
		displayCount.style.color = "red";
		displayCount.style.display = "block";
	} else if (count === 0) {
		console.log(displayCount);
		displayCount.style.display = "none";
	} */

	return (
		<article className="counter">
			<h2>Counter</h2>
			<div>
				<button onClick={plus}>+</button>
				<p  /* className="displayCount" */>at <span ref={pRef}>{count}</span></p>
				<button onClick={minus}>-</button>
			</div>
		</article>
	);
};

export default Counter;
