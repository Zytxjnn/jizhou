import React, {useEffect, useRef, useState} from 'react';

import Title from '../Ttitle'
import { Carousel } from 'antd';
import {
    Wrapper
} from "./style";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {getCraftWork} from "@/network/home";


export default function CraftWork(props){
    const [list,setList] = useState([]);
    const [title,setTitle] = useState('');
    const [subTitle,setSubTitle] = useState('');
    const carouselRef = useRef();

    useEffect(() => {
        getCraftWork().then(res => {

            const data = res;
            const len = data.length;
            let index = 0;
            const arr = [];
            while(index < len){
                arr.push(data.slice(index,(index+=4)));
            }
            // console.log(arr)
            setList(arr);
            setTitle('治窑工艺')
            setSubTitle('NEWS CENTER');
        })
    },[]);




    const carouselChange = flag => {
        flag === 0 ? carouselRef.current.prev() : carouselRef.current.next()
    };


    return (
        <Wrapper>
            <Title title={title} subTitle={subTitle} />
            <div className="switch">
                <div className="prev btn" onClick={() => {carouselChange(0)}}><LeftOutlined/></div>
                <div className="next btn" onClick={() => {carouselChange(1)}}><RightOutlined/></div>
            </div>
            <Carousel ref={carouselRef}>
                {
                    list.map((item,index) => {
                        return (
                            <div className='list' key={index}>
                                {
                                   item.map((item,index) => {
                                       return (
                                           <div className='item' key={item.Key+index}>
                                               <img src={item.ImgUrl} alt=""/>
                                               <div className="show-btn">立即查看</div>
                                           </div>
                                       )
                                   })
                                }
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                            </div>
                        )
                    })
                }
            </Carousel>
        </Wrapper>
    )
}