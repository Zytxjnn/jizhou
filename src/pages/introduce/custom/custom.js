import {useEffect, useState} from "react";
import {useHistory} from "react-router";
import {Link} from 'react-router-dom'
import {Breadcrumb} from "antd";
import {
    Wrapper
} from "./style";

import { getCustom } from "@/network/introduce";
import {_chunk} from "@/common/js/utils";
import {setStorage} from "@/common/js/utils";

export default function Custom(){
    const [data,setData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getCustom().then(res => {
            setData(_chunk(res,9));
            setStorage('custom_list',res);
        })
    },[]);

    const dumpDetail = item => {
        setStorage('custom_item',item);
        history.push(`/detail?id=${item.ID}&type=custom`);
    }

    return (
        <Wrapper>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to={'/'}>首页</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>初识吉州窑</Breadcrumb.Item>
                <Breadcrumb.Item>民俗</Breadcrumb.Item>
            </Breadcrumb>
            {
                data.map((item,index) => {
                    return (
                        <div className='content' key={index}>
                            <div className={`top ${index % 2 !== 0 ?'right' : ''}`}>
                                <div className="left">
                                    <div className="img">
                                        <img src={item[0].ImgUrl} alt="" />
                                    </div>
                                    <div className="title">{item[0].Tiltle_1 }</div>
                                    <div className="synopsis">{ item[0].Synopsis_1 }</div>
                                    <div className="more"><span className="text" onClick={() => dumpDetail(item[0])}>了解详情</span></div>
                                </div>
                                <div className="right">
                                    {
                                        item.slice(1,5).map((item,index) => {
                                            return (
                                                <div className="item" key={item.ID}>
                                                    <img src={item.ImgUrl} alt="" />
                                                    <div className="title">{ item.Tiltle_1 }</div>
                                                    <div className="more" onClick={() => dumpDetail(item)}>
                                                        <span className="text">了解详情</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                        </div>
                        <div className="list">
                            {
                                item.slice(5,10).map((item,index) => {
                                   return (
                                       <div className="item" >
                                           <div className="left">
                                               <img src={item.ImgUrl} alt=""/>
                                           </div>
                                           <div className="right">
                                               <div className="title">
                                                   <span>{ item.Tiltle_1 }</span>
                                               </div>
                                               <div className="more" onClick={() => dumpDetail(item)}><span className="text" >了解详情</span></div>
                                           </div>
                                       </div>
                                   )
                                })
                            }
                        </div>
                        <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    </div>
                    )
                })
            }
        </Wrapper>
    )
}