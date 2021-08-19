import React, {useEffect, useState} from 'react';

import Title from '../Ttitle'
import {
    Wrapper
} from "./style";

import {getServices} from "@/network/home";


export default function Services(props){
    const [list,setList] =  useState([]);
    const [title,setTitle] = useState('景区服务');
    const [subTitle,setSubTitle] = useState('NEWS CENTER');


    useEffect(() => {
        getServices().then(res => {
            const data = res.data.Data;
            const len = data.length-1;


            setList(data.slice(1,len))
        })
    },[]);




    return (
        <Wrapper>
            <Title title={title} subTitle={subTitle} />
            <div className="list">
                {
                    list.length && list.map(item => {
                        return (
                            <div className='item' key={item.ID}>
                                <img src={item.ImgUrl} alt=""/>
                                <div className="text">{item.Name}</div>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}