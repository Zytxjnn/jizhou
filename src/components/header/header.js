import React, {useEffect, useState} from "react";

import {
    Wrapper,Left,Right
} from "./style";
import {DownOutlined} from '@ant-design/icons'



export default function Header(props){
    const [activeIndex,setActiveIndex] = useState(-1);
    let t = null;

    const enter1 = index => {
        clearTimeout(t)
        setActiveIndex(index)
    }

    const enter2 = index => {
        clearTimeout(t)
    }


    const leave1= index => {
        t = setTimeout(() => {
            setActiveIndex(-1)
        },300)
    }

    const leave2 = index => {
        setActiveIndex(-1)
    }





    return (
       <Wrapper>
          <Left>吉州窑风景区</Left>
          <Right>
              {
                  props.menu.map((item,index) => {
                      return <div className='nav-item' key={item+index} onMouseEnter={() => {enter1(index)}} onMouseLeave={() => {leave1()}}>
                          <span className='text-white flex items-center'>
                              <span className='title'>{item.Name}</span>
                              <DownOutlined  />
                          </span>
                          {
                               item.Children &&  <div key={index} className={`dropdown ${index === activeIndex ? 'active' : ''}`} onMouseEnter={() => {enter2(index)}} onMouseLeave={() => leave2}  >
                                  {
                                      item.Children && item.Children.map(item => {
                                          return (
                                              <div className='item' key={item.ID}>{item.Name}</div>
                                          )
                                      })
                                  }
                              </div>
                          }
                      </div>
                  })
              }
          </Right>
       </Wrapper>
    )
}