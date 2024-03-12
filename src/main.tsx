import React from 'react';
import ReactDOM from 'react-dom/client';
import "./firebase";
import App from '@/components/App/App';
import GlobalStyle from './globalStyles/styled';
import ThemeChanger from './components/ThemeChanger';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeChanger>
			<GlobalStyle />
			<App />
		</ThemeChanger>
	</React.StrictMode>
);
