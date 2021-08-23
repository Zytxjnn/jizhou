import {useLocation, useParams} from "react-router";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {
    Wrapper
} from "./style";
import {useHistory} from "react-router-dom";



export default function BackgroundImage(props){
    const [data,setData] = useState({});
    let {pathname,search} = useLocation();
    const params = useParams();


    const {menuData} = useSelector(state => {
        return {
            menuData:state.getIn(['menuData'])
        }
    });

    useEffect(() => {
        const id = search.match(/=(.+?)&/)?.[1];
        const type = search.match(/type=(.+?)$/)?.[1];
        refresh(id,type);
    },[pathname,menuData]);





    const refresh = (id,type) => {
        if(type){
            pathname = `/${type}`;
        }

        menuData.forEach(item => {
            if (item.Url === pathname) {
                setData(item);
            }

            if (item.Children) {
                item.Children.forEach(item => {
                    if (item.Url === pathname) {
                        setData(item);
                    }
                })
            }
        })
    }



    return (
        <Wrapper pathname={pathname}>
            <img src={data.ImgBoo} alt=""/>
            <div className="title">
                <span>{data.Name}</span>
            </div>
        </Wrapper>
    )
}