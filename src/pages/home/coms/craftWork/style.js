import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width:var(--wrapper-width);
  margin:0 auto;

  .btn{
    position: absolute;
    top: 60%;
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
      left: .1rem;
     
    }
    &.next{
      right: .1rem;

    }
  }
 

  .description{
    width: 80%;
    margin:0 auto;
    font-size: .15rem;
    line-height: .3rem;
  }
  
 

  .list{
    display: flex !important;
    justify-content: space-between;
    flex-wrap: wrap;
   
    i{
     width: 22%;
    }
    
    .item{
      position: relative;
      width: 22%;
      height: 100%;
      cursor: pointer;
      overflow: hidden;
     
      
      
      img{
       
        transition: all .3s linear;
      }
      
      &:hover img{
        transform: scale(1.1);
      }
      
      .show-btn{
        position: absolute;
        bottom: .2rem;
        left: 50%;
        transform: translateX(-50%);
        color:#fff;
        padding: .03rem .3rem;
        background: linear-gradient(#45a7fe,#5dd1fc);
      }
    }
  }
  

`