import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
    * {
        font-family: 'AppleMyungjo, Helvetica';
    }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
