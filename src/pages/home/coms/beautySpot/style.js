import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: .1rem;
  
  width:var(--wrapper-width);
  margin:0 auto;

  .btn{
    position: absolute;
    top: 50%;
    width: .4rem;
    height: .4rem;
    border-radius:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.8);
    color:#fff;
    font-weight: bolder;
    font-size: .17rem;
    cursor: pointer;
    user-select: none;
    z-index: 10;

    &.prev{
      left: .2rem;
    }
    &.next{
      right: .2rem;
    }
  
  .title{
    font-size: .3rem;
  }
  
  .sub-title{
    font-size: .2rem;
  }

  .description{
    width: 80%;
    margin:0 auto;
    font-size: .15rem;
    line-height: .3rem;
  }
  
  .banner-img{
    width: 100%;
    height: 5rem;
  }
`