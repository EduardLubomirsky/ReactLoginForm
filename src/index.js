import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './Bank.png';
import Form from './Form';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
		<div>
			<img src={logo} className="form-logo" alt="logo" />
			<Form/>
		</div>, document.getElementById('root')
);
registerServiceWorker();
