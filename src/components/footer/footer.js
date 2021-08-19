import {useEffect, useState} from "react";
import {
    Wrapper
} from "./style";

import {getQR} from "@/network/home";

export default function Footer(props){
    const [imgs,setImgs] = useState([]);

    useEffect(() => {
        getQR().then(res => {
            const data = res.data.Data;
            setImgs(data.slice(0,data.length-1))
        });
    },[]);


    return (
       <Wrapper>
            <div className="top flex items-center">
                <div className='about'>关于我们</div>
                <div className='flex'>
                    <div className='number'>17388888888</div>
                    <div className='address'>铜仁市碧江区双江路40号 中南门</div>
                </div>
            </div>
           <div className="content">
               <div className="left">
                    {
                        props.menu && props.menu.map((item,index) => {
                            return (
                                <div className="item" key={index}>
                                    <div className="title">{item.Name}</div>
                                    {
                                        item.Children && item.Children.map((item,index) => {
                                            return (
                                                <div className='sub-title hover:text-white' key={index}>
                                                    {item.Name}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
               <div className="right">
                   {
                       imgs.map(item => {
                           return (
                               <img src={item.ImgUrl} key={item.ID} alt=""/>
                           )
                       })
                   }
               </div>
           </div>
           <div className="bottom">
               <span>2021-2024©版本所有</span>
               <span>ICP备案主体：黔ICP备2021006553号</span>
               <span>gzfjsly.com：黔ICP备2021006553号-2</span>
               <span>梵净山旅游网.com：黔ICP备2021006553号-1</span>
           </div>
       </Wrapper>
    )
}