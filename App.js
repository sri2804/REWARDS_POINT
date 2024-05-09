// Filename - App.js

import "./App.css";
import Sidebar from "./components/Sidebar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import {
	// AboutUs,
	OurAim,
	OurVision,
} from "./pages/AboutUs";
import {
	// Services,
	ServicesOne,
	ServicesTwo,
	ServicesThree,
} from "./pages/Services";
import {
	Events,
	EventsOne,
	EventsTwo,
} from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Supports";
import Profile from "./pages/Profile"
function App() {
	return (
		<>
		<Router>
		
			<Sidebar />
			<Routes>
				{/* <Route
					path="/about-us"
					element={<AboutUs />}
				/> */}
				<Route
					path="/about-us/aim"
					element={<OurAim />}
				/>
				{/* <Route
					path="/about-us/vision"
					element={<OurVision />}
				/> */}
				{/* <Route
					path="/services"
					element={<Services />}
				/> */}
				<Route
					path="/services/services1"
					element={<ServicesOne />}
				/>
				<Route
					path="/services/services2"
					element={<ServicesTwo />}
				/>
				<Route
					path="/services/services3"
					element={<ServicesThree />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/events"
					element={<Events />}
				/>
				<Route
					path="/events/events1"
					element={<EventsOne />}
				/>
				<Route
					path="/events/events2"
					element={<EventsTwo />}
				/>
				<Route
					path="/support"
					element={<Support />}
				/>
			</Routes>
		</Router>
		
		</>
	);
}

export default App;


// // App.js
// import React from 'react';
// import StaffDashboard from './components/Staffdashboard';

// function App() {
//   return (
//     <div className="App">
//       <StaffDashboard />
//     </div>
//   );
// }

// export default App;
