import "./config/firebase";

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/components/App/App';

import ThemeChanger from './components/ThemeChanger';
import GlobalStyle from './globalStyles/styled';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeChanger>
			<GlobalStyle />
			<App />
		</ThemeChanger>
	</React.StrictMode>
);
