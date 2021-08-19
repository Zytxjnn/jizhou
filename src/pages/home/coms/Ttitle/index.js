import React from 'react';


import {
    Wrapper
} from "./style";


export default function BeautySpot(props){
    const {title,subTitle}  = props;
  return (
      <Wrapper>
          <div className="title text-center">{title}</div>
          <div className="sub-title text-center text-gray-400">{subTitle}</div>
      </Wrapper>
  )
}