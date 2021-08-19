import React, {Suspense, useEffect, useState} from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import routers from './router';
import '@/assets/css/reset.css';
import '@/common/js/rem.js';

import {getSiteMenus} from "./network/home";


import Loading from '@/common/components/loading';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { BackTop } from 'antd';



function App() {
    const [menu,setMenu] = useState([]);
    useEffect(() => {
        getSiteMenus().then(res => {
            setMenu(res.data);
        })
    },[]);

  return (
    <BrowserRouter>
        <Header menu={menu} />
          <Suspense fallback={<Loading/>}>
          {renderRoutes(routers)}
          </Suspense>
        <Footer menu={menu} />
        <BackTop/>
    </BrowserRouter>
  );
}

export default App;