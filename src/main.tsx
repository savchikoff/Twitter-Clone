import React from 'react';
import ReactDOM from 'react-dom/client';
import "./firebase";
import App from '@components/App/App';
import GlobalStyle from './GlobalStyles/styled';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
);
