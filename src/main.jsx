import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)

// Add global smooth scroll for anchor links with hashes
if (typeof window !== 'undefined') {
	document.addEventListener('DOMContentLoaded', () => {
		document.body.addEventListener('click', function (e) {
			if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
				const id = e.target.getAttribute('href').slice(1);
				const el = document.getElementById(id);
				if (el) {
					e.preventDefault();
					el.scrollIntoView({ behavior: 'smooth' });
				}
			}
		});
	});
}
