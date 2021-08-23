import React, {Suspense} from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter,useLocation } from 'react-router-dom';
// import {} from "react-router";
import {Provider} from "react-redux";

import routers from './router';
import '@/assets/css/reset.css';
import '@/common/js/rem.js';



import { BackTop } from 'antd';
import Loading from '@/common/components/loading';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BackgroundImage from './components/BackgroundImage/backgroundImage';

import store from "./store";




function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <Header />
             <BackgroundImage/>
            <Suspense fallback={<Loading/>}>
                {renderRoutes(routers)}
            </Suspense>
            <Footer />
            <BackTop/>
        </BrowserRouter>
    </Provider>
  );
}

export default App;