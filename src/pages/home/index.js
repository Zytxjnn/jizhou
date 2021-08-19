import React, {useEffect, useState} from 'react';
import {getHome} from "@/network/home";

import Banner from './coms/banner';
import BeautySpot from "./coms/beautySpot";
import CraftWork from  './coms/craftWork';
import Services from './coms/services';
import News from './coms/news';
import {
    Wrapper
} from "./style";

export default function Home(){
    const [data,setData] = useState([]);

    useEffect(() => {
        getHome().then(res => {
            setData(res.data);
        })
    },[]);

    return (
        <Wrapper>
            <div id='home'>
                <Banner bannerList={data.BannerList} />
                <BeautySpot/>
                <CraftWork list={data.xwdtLists} />
                <News list={data.xwdtLists} />
                <Services/>
            </div>
        </Wrapper>
    )
}