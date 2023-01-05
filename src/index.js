import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CanvasStack from './Components/CanvasStack';
import reportWebVitals from './reportWebVitals';
import Error from './Components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.Fragment>
		<Router>
			<Routes>
				<Route path="/:id" element={<CanvasStack />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</Router>
	</React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
