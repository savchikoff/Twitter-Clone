import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/userStore';
import { Provider } from 'react-redux';
import App from '@components/App/App';
import GlobalStyle from './GlobalStyles/styled';
import { BrowserRouter } from 'react-router-dom';
import "./firebase";

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
