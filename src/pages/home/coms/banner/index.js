import { useRef } from "react";

import { Carousel } from 'antd';
import { RightOutlined,LeftOutlined } from '@ant-design/icons'
import {
    Wrapper
} from "./style";

export default function Banner(props){
    const carouselRef = useRef(null);



    const carouselChange = flag => {
        flag === 0 ? carouselRef.current.prev() : carouselRef.current.next()
    }

    return (
        <Wrapper>
            <Carousel effect="fade" ref={carouselRef}>
                { props.bannerList && props.bannerList.map(item => {
                    return (
                        <div key={item.Id}>
                            <img src={item.ImgUrl} alt=""/>
                        </div>
                    )
                })}
            </Carousel>
            <div className="switch">
                <div className="prev btn" onClick={() => {carouselChange(0)}}><LeftOutlined/></div>
                <div className="next btn" onClick={() => {carouselChange(1)}}><RightOutlined/></div>
            </div>
        </Wrapper>
    )
}