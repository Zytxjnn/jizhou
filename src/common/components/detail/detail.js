import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {
    Wrapper
} from "./style";

import {getContent} from "@/network/g";
import {getStorage} from "../../js/utils";

export default function Detail(){
    const [content,setContent] = useState({});
    const [recommendList,setRecommendList] = useState([]);
    let {search} = useLocation();
    const type = search.match(/type=(.+?)$/)?.[1];
    const id = search.match(/=(.+?)&/)?.[1];


    useEffect(() => {
        getContent(id).then(res => {
            setContent(res);
        })

        getRecommendList(type);
    },[]);


    const getRecommendList = () => {
        const item = getStorage(`${type}_item`);
        const list = getStorage(`${type}_list`).filter(data => {
            return data.Tiltle_1 !== item.Tiltle_1;
        }).sort(() => Math.random() - 0.5).slice(0, 5);
        setRecommendList(list);
    }

    const switchItem = id => {
        window.scrollTo(0, 0);
        getContent(id).then(res => {
            setContent(res);
        })
        getRecommendList();
    }

    return (
        <Wrapper>
            <div className="view">
                <div className="content" dangerouslySetInnerHTML={{__html:content.Content_1}}></div>
                <div className="sidebar">
                    <div className="title">更多</div>
                    <div className="list">
                        {
                            recommendList.map((item,index) => {
                                return (
                                    <div className='item' key={item.ID} onClick={() => {switchItem(item.ID)}}>
                                        <div className="img">
                                            <img src={item.ImgUrl} alt={item.Name}/>
                                        </div>
                                        <div className="title">{item.Tiltle_1}</div>
                                    </div>

                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}