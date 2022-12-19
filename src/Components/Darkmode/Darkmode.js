import React, { useState } from "react";
import "./Darkmode.css";

const Darkmode = () => {
	let [theme, setTheme] = useState("light");
	/* let [dark, setDark] = useState(""); */

	function darkLight() {
		if (theme === "dark") {
			setTheme("light");
		}
		if (theme === "light") {
			setTheme("dark");
		}
	}
	return (
		<article className={`darkmode ${theme}`}>
			<h2>lev1_3</h2>
			<button onClick={darkLight}>Wechsel {/* zum {theme}  */}Modus</button>
		</article>
	);
};

export default Darkmode;
