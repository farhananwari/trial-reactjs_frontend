import  React, {Route, Routes} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Errorz from "../src/views/error/404"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
        
      </BrowserRouter>
  </React.StrictMode>,
)

