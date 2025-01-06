import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./output.css";
import App from "./App.jsx";
import { PositionProvider } from "./contexts";

createRoot(document.getElementById("root")).render(
	<PositionProvider>
		<StrictMode>
			<App />
		</StrictMode>
	</PositionProvider>
);
