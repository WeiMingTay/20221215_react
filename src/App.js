import "./App.css";
import Counter from "./Components/Counter/Counter";
import Darkmode from "./Components/Darkmode/Darkmode";
import Faq from "./Components/Faq/Faq";
import InputField from "./Components/InputField/InputField";
import ShowText from "./Components/ShowText/ShowText";

function App() {
	return (
		<div className="App">
			<Counter />
			<ShowText />
			<Faq />
			<Darkmode />
			<InputField />
		</div>
	);
}

export default App;
