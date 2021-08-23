import React, {useEffect, useRef, useState} from 'react';

import Title from '../Ttitle'
import { Carousel } from 'antd';
import {
    Wrapper
} from "./style";
import { getBeautySpot } from '@/network/home';
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

export default function BeautySpot(){
    const [list,setList] = useState([]);
    const carouselRef = useRef();
    const TITLE = '中国·吉州窑风景区';
    const SUB_TITLE = 'NEW CENTER';


    useEffect(() => {
        getBeautySpot().then(res => {
            const data = res.data;
            setList(data);
        })
    },[]);

    const carouselChange = flag => {
        flag === 0 ? carouselRef.current.prev() : carouselRef.current.next()
    };

    return (
        <Wrapper>
            <Title title={TITLE} subTitle={SUB_TITLE} />
            <div className="switch">
                <div className="prev btn" onClick={() => {carouselChange(0)}}><LeftOutlined/></div>
                <div className="next btn" onClick={() => {carouselChange(1)}}><RightOutlined/></div>
            </div>
            <Carousel dots={false} autoplay={true} ref={carouselRef}>
                {
                    list.map(item => {
                        return (
                            <div key={item.ID}>
                                <img className='banner-img' src={item.ImgUrl} alt=""/>
                                <div className="description text-center text-gray-600">{item.Synopsis_1}</div>
                            </div>
                        )
                    })
                }
            </Carousel>

        </Wrapper>
    )
}