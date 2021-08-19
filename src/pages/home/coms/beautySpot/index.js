import React, {useEffect, useState} from 'react';

import Title from '../Ttitle'
import { Carousel } from 'antd';
import {
    Wrapper
} from "./style";
import { getBeautySpot } from '@/network/home';

export default function BeautySpot(){
    const [list,setList] = useState([]);
    const TITLE = '中国·吉州窑风景区';
    const SUB_TITLE = 'NEW CENTER';
    const DESCRIPTION = '吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑吉州窑';


    useEffect(() => {
        getBeautySpot().then(res => {
            const data = res.data.Data;
            setList(data.slice(0,data.length-1));
        })
    },[]);

    return (
        <Wrapper>
            <Title title={TITLE} subTitle={SUB_TITLE} />
            <Carousel dots={false} autoplay={true}>
                {
                    list.map(item => {
                        return (
                            <div key={item.ID}>
                                <img className='banner-img' src={item.ImgUrl} alt=""/>
                            </div>
                        )
                    })
                }
            </Carousel>
            <div className="description text-center text-gray-600">{DESCRIPTION}</div>
        </Wrapper>
    )
}