import React, {useEffect, useRef, useState} from "react";
import Title from '../Ttitle'

import {Carousel} from 'antd';
import {
    Wrapper
} from "./style";

import {getComment} from "@/network/home";
import { _chunk } from '@/common/js/utils';
import {LeftOutlined, RightOutlined} from "@ant-design/icons";


function CommentItem(props){
    const {data} = props;
    return (
        <div className='item shadow-md'>
            <div className="top">
                <img src={data.ImgUrl} alt=""/>
            </div>
            <div className="bottom">
                <div className="name">{data.Name}</div>
                <div className="synopsis">{data.Synopsis_1}</div>
            </div>
        </div>
    )
}

export default function Comment(){
    const [list,setList] = useState([]);
    const carouselRef = useRef();

    useEffect(() => {
        getComment().then(res => {
            const data = res.data.Data.slice(1).filter(item => {
                return item.ImgUrl
            });
            setList(_chunk(data,3))
        })
    },[]);


    const carouselChange = flag => {
        flag === 0 ? carouselRef.current.prev() : carouselRef.current.next()
    };


    return (
        <Wrapper>
            <Title title='景区评价' subTitle='NEWS CENTER' />
            <div className="switch">
                <div className="prev btn" onClick={() => {carouselChange(0)}}><LeftOutlined/></div>
                <div className="next btn" onClick={() => {carouselChange(1)}}><RightOutlined/></div>
            </div>
            <Carousel ref={carouselRef}>
                {
                    list.map((item,index) => {
                        return (
                            <div className="list" key={index}>
                                {
                                    item.map(item => {
                                        return <CommentItem key={item.Key} data={item} />
                                    })
                                }
                            </div>
                        )
                    })
                }
            </Carousel>
        </Wrapper>
    )
}