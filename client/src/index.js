import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MovieProvider } from './components/MovieProvider';
import {DirectorProvider} from './components/DirectorProvider';

ReactDOM.render(
  <React.StrictMode>
    <DirectorProvider>
    <MovieProvider>
      <App />
    </MovieProvider>
    </DirectorProvider>
  </React.StrictMode>,
  document.getElementById('root')
)