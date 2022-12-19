import React, { useState } from "react";
import "./InputField.css";

const InputField = () => {
	let vornamen = document.getElementById("vorname");

	let [vorname, setVorname] = useState("");
	let [nachname, setNachname] = useState("");
	let [email, setEmail] = useState("");

	function getVorname() {
		console.log(vornamen.value);
	}

	return (
		<article className="inputField">
			<h2>lev1_6</h2>
			<div className="inputs">
				<input
					type="text"
					placeholder="Vorname"
					id="vorname"
					onChange={(e) => {setVorname(e.target.value)/* ; vornamen.value="" */}}
				/>
				<input
					type="text"
					placeholder="Nachname"
					onChange={(e) => setNachname(e.target.value)}
				/>
				<input
					type="email"
					placeholder="E-Mail"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="inputAusgabe">
				<div>
					<p>Vorname: </p>
					<p>{vorname}</p>
				</div>
				<div>
					<p>Nachname:</p>
					<p>{nachname}</p>
				</div>
				<div>
					<p>E-Mail:</p>
					<p>{email}</p>
				</div>
			</div>
		</article>
	);
};

export default InputField;
