import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import App from './components/App.jsx';

import storeFactory from './store'; 



window.React = React;

const store = storeFactory();

render(
	<Provider store={store} >
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>,
	document.getElementById('react-container')
);