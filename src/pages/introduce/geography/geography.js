import {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import {Breadcrumb} from "antd";
import {
    Wrapper
} from "./style";

import { getGeography} from "@/network/introduce";


export default function Geography(){
    const [data,setData] = useState({})

    useEffect(() => {
        getGeography().then(res => {
            setData(res)
        })
    },[]);

    return (
        <Wrapper>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to={'/'}>首页</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>初识吉州窑</Breadcrumb.Item>
                <Breadcrumb.Item>地理</Breadcrumb.Item>
            </Breadcrumb>
            {
                data.Content_1 &&
                <div className="content" dangerouslySetInnerHTML={{__html:data.Content_1}}>

                </div>
            }
        </Wrapper>
    )
}