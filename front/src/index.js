/*

=========================================================
* Now UI Kit React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2023 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// styles for this kit
import 'assets/css/bootstrap.min.css';
import 'assets/scss/now-ui-kit.scss?v=1.5.0';
import 'assets/demo/demo.css?v=1.5.0';
import 'assets/demo/nucleo-icons-page-styles.css?v=1.5.0';
// pages for this kit
import App from './App.js';
import store from './store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <React.StrictMode>
      <Provider store={store}>
         {/*<BrowserRouter basename='/User/java3/IdeaProjects/HelloWorld/back/src/main/resources/templates'>*/}
         <BrowserRouter>
            <ScrollToTop/>
            <App />
         </BrowserRouter>
      </Provider>
   </React.StrictMode>,
);

reportWebVitals();
