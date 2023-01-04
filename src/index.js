import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PhotoCanvas from './Components/PhotoCanvas';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.Fragment>
		<PhotoCanvas elements={[]} width={500} height={500} />
	</React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
