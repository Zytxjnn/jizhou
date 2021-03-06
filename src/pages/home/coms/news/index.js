import React, {useEffect, useRef, useState} from 'react';

import  {Carousel,Skeleton} from 'antd'
import Title from '../Ttitle'
import {
    Wrapper
} from "./style";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {getNews} from "@/network/home";




export default function News(){
    const [list,setList] =  useState([]);
    const [activeIndex,setActiveIndex] = useState(0);
    const [title,setTitle] = useState('新闻资讯');
    const [subTitle,setSubTitle] = useState('NEWS CENTER');

    useEffect(() => {
        getNews().then(res => {
            setList([res[0].data.Data,res[1].data.Data]);
        })
    },[]);

    const carouselRef = useRef(null);
    const carouselChange = flag => {
        flag === 0 ? carouselRef.current.prev() : carouselRef.current.next()
    }



    const formatDate = dateString => {
        let arr = dateString.split('/');
        return [`${arr[0]}-${arr[1]}`,arr[2]]
    }


    return (
        <Wrapper>
            <Title title={title} subTitle={subTitle} />
            <div className="card shadow-lg">
                <div className="text">
                   <div className="top">
                       <div className={`left ${activeIndex === 0 ? 'active' : ''}`} onClick={() => {setActiveIndex(0)}}>新闻动态</div>
                       <div className={`right ${activeIndex === 1 ? 'active' : ''}`} onClick={() => {setActiveIndex(1)}}>行业动态</div>
                   </div>
                    <div className="container">
                        <div className="list">
                            {
                                list[activeIndex] ? list[activeIndex].map(item => {
                                    return (
                                        <div className="item hover:shadow" key={item.Key}>
                                            <div className="left">
                                                <div className="top">{formatDate(item.CreateTime)[1]}</div>
                                                <div className="bottom">{formatDate(item.CreateTime)[0]}</div>
                                            </div>
                                            <div className="right">
                                                <div className="title">{item.Name}</div>
                                                <div className="content">{item.Synopsis_1}</div>
                                            </div>
                                        </div>
                                    )
                                }) :  <div><Skeleton  /><Skeleton  /><Skeleton  /></div>
                            }
                        </div>
                    </div>
                </div>
                <div className="carsouel">
                    <div className="switch">
                        <div className="prev btn" onClick={() => {carouselChange(0)}}><LeftOutlined/></div>
                        <div className="next btn" onClick={() => {carouselChange(1)}}><RightOutlined/></div>
                    </div>
                    <Carousel ref={carouselRef}>
                        {
                            list[activeIndex] && list[activeIndex].map(item => {
                                return (
                                    <div key={item.Key}>
                                        <img src={item.ImgBoo} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </Wrapper>
    )
}