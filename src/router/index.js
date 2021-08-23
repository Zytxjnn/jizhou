import React from 'react';

const Home = React.lazy(() => import('@/pages/home'));
const Geography = React.lazy(() => import('@/pages/introduce/geography/geography.js'));
const Weather = React.lazy(() => import('@/pages/introduce/weather/weather.js'));
const History = React.lazy(() => import('@/pages/introduce/history/history.js'));
const Culture = React.lazy(() => import('@/pages/introduce/culture/culture.js'));
const Custom = React.lazy(() => import('@/pages/introduce/custom/custom.js'));
const Characteristic = React.lazy(() => import('@/pages/introduce/characteristic/characteristic.js'));
const Detail = React.lazy(() => import('@/common/components/detail/detail.js'));

const router = [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/geography',
        exact:true,
        component:Geography
    },
    {
        path:'/weather',
        exact:true,
        component:Weather
    },
    {
        path:'/history',
        exact:true,
        component:History
    },
    {
        path:'/culture',
        exact:true,
        component:Culture
    },
    {
        path:'/custom',
        exact:true,
        component:Custom
    },
    {
        path:'/characteristic',
        exact:true,
        component:Characteristic
    },
    {
        path:'/detail',
        exact:true,
        component:Detail
    },
];

export default router;