import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import Settings from "./Components/Settings";
import { Contact } from "./Components/Contact";
import NavBar from "./Components/NavBar";

const App: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path={"/home"} element={<Home />} />
					<Route path={"/about"} element={<About />} />
					<Route path={"/settings"} element={<Settings />} />
					<Route path={"/contact"} element={<Contact />} />
					<Route path={"*"} element={<div>404 not found</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
