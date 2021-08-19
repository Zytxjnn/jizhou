import React, {useEffect, useRef, useState} from 'react';

import Title from '../Ttitle'
import { Carousel } from 'antd';
import {
    Wrapper
} from "./style";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";


export default function CraftWork(props){
    const [list,setList] = useState([]);
    const carouselRef = useRef();
    const TITLE = '制窑工艺';
    const SUB_TITLE = 'NEWS CENTER';


    useEffect(() => {
        // 转成二元数组
        let _list = props.list;

        if(!_list) return;
        _list = _list.concat(_list)
        const len = _list.length;
        let index = 0;
        const arr = [];
        while(index < len){
            arr.push(_list.slice(index,(index+=4)));
        }

        setList(arr);

    },[props.list]);

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
            <Carousel ref={carouselRef}>
                {
                    list.length && list.map((item,index) => {
                        return (
                            <div className='list' key={index}>
                                {
                                   item.map((item,index) => {
                                       return (
                                           <div className='item' key={item.Key+index}>
                                               <img src={item.ImgBoo} alt=""/>
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