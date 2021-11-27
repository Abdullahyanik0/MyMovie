import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />,
    </BrowserRouter>,
    document.getElementById('root'));