import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import {
    Wrapper
} from "./style";

import {getQR,getAddressAndTel} from "@/network/home";


export default function Footer(props){
    const [imgs,setImgs] = useState([]);
    const [info,setInfo] = useState([]);
    const history = useHistory();

    const {menuData} = useSelector(state => {
        return {
            menuData:state.getIn(['menuData'])
        }
    });

    useEffect(() => {
        getQR().then(res => {
            const data = res.data.Data;
            setImgs(data.slice(0,data.length-1))
        });

        getAddressAndTel().then(res => {
            setInfo(res);
        })
    },[]);

    const dump = url => {
        history.push(url)
    }


    return (
       <Wrapper>
            <div className="top flex items-center">
                <div className='about'>关于我们</div>
                <div className='flex'>
                    <div className='number'>{info[0]?.Value}</div>
                    <div className='address'>{info[1]?.Value}</div>
                </div>
            </div>
           <div className="content">
               <div className="left">
                    {
                        menuData.map((item,index) => {
                            return (
                                <div className="item" key={index}>
                                    <div className="title">{item.Name}</div>
                                    {
                                        item.Children && item.Children.map((item,index) => {
                                            return (
                                                <div className='sub-title hover:text-white' key={index} onClick={() => {dump(item.Url)}}>
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
           {/*<div className="bottom">*/}
           {/*    <span>2021-2024©版本所有</span>*/}
           {/*    <span>ICP备案主体：黔ICP备2021006553号</span>*/}
           {/*    <span>gzfjsly.com：黔ICP备2021006553号-2</span>*/}
           {/*    <span>梵净山旅游网.com：黔ICP备2021006553号-1</span>*/}
           {/*</div>*/}
       </Wrapper>
    )
}