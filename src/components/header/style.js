import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0,0,0,.5);
  padding: .2rem .5rem;
  z-index: 10;
`
export const Left = styled.div`
  color:#fff;
  font-size: .3rem;
  letter-spacing: .06rem;
  
`
export const Right = styled.div`
  display: flex;
  border-bottom:.02rem solid #fff;
  
  
  .nav-item{
    position: relative;
    font-size: .2rem;
    cursor:pointer;
    margin-right: .3rem;
    margin-left: .1rem;
    padding-bottom: .1rem;
    
    .title{
      margin-right: .05rem;
    }
    
    .anticon-down{
      font-size: .15rem;
    }
    
   
    
    .dropdown{
      display: none;
      position: absolute;
      color:#fff;
      font-size: .16rem;
      padding: .1rem;
      background-color: rgba(0,0,0,.5);
      border-radius: .1rem;
      left: 50%;
      transform: translateX(-50%);
      top: .5rem;
      
      .item{
        width: 1rem;
        text-align: center;
        line-height: .4rem;
      }
      
      &.active{
        display: block;
      }
    }
  }
  
`