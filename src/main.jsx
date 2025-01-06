import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./output.css";
import App from "./App.jsx";
import { PositionProvider } from "./contexts";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"


createRoot(document.getElementById("root")).render(
	<PositionProvider>
		<StrictMode>
			<Analytics />
			<SpeedInsights />
			<App />
		</StrictMode>
	</PositionProvider>
);
