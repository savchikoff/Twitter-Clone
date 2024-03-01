import "./firebase";

import App from '@components/App/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './GlobalStyles/styled';
import { store } from './store/userStore';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<GlobalStyle />
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
