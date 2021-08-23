import {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import {Breadcrumb} from "antd";
import {
    Wrapper
} from "./style";

import { getWeather} from "@/network/introduce";


export default function Weather(){
    const [data,setData] = useState({})

    useEffect(() => {
        getWeather().then(res => {
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
                <Breadcrumb.Item>气候</Breadcrumb.Item>
            </Breadcrumb>
            {
                data.Content_1 &&
                <div className="content" dangerouslySetInnerHTML={{__html:data.Content_1}}>

                </div>
            }
            <iframe allowTransparency="true" frameBorder="0" width="100%" height="96" scrolling="no"
                    src="//tianqi.2345.com/plugin/widget/index.htm?s=1&z=1&t=0&v=0&d=5&bd=0&k=&f=&ltf=009944&htf=cc0000&q=0&e=0&a=0&c=71398&w=575&h=96&align=center"></iframe>
        </Wrapper>
    )
}