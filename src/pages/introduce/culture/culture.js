import {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import {Breadcrumb} from "antd";
import {
    Wrapper
} from "./style";

import { getCulture} from "@/network/introduce";
import {setStorage} from "@/common/js/utils";

export default function Culture(){
    const [data,setData] = useState({})

    useEffect(() => {
        getCulture().then(res => {
            setData(res);
        })
    },[]);





    return (
        <Wrapper>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to={'/'}>首页</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>初识吉州窑</Breadcrumb.Item>
                <Breadcrumb.Item>文化</Breadcrumb.Item>
            </Breadcrumb>
            {
                data.Content_1 &&
                <div className="content" dangerouslySetInnerHTML={{__html:data.Content_1}}></div>
            }
        </Wrapper>
    )
}