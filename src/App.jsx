import { Content } from "./layout/Content";
import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";
// import { Navbar, Footer } from "react-club-components"

function App() {
	return (
		<div>
			<Navbar />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
