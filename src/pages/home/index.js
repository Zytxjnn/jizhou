import React, {useEffect, useState} from 'react';
import {getHome} from "@/network/home";

import Banner from './coms/banner';
import BeautySpot from "./coms/beautySpot";
import CraftWork from  './coms/craftWork';
import Services from './coms/services';
import News from './coms/news';
import Comment from './coms/comment'
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
                <News list={data.xwdtLists} />
                <BeautySpot/>
                <CraftWork/>
                <Comment/>
                <Services/>
            </div>
        </Wrapper>
    )
}