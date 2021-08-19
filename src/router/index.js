import React from 'react';

const Home = React.lazy(() => import('@/pages/home'));

const router = [
    {
        path:'/',
        exact:true,
        component:Home
    }
];

export default router;