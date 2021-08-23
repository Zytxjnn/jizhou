import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
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
  }
  
  .list{
    display: flex !important;
    justify-content: space-between;
    padding: .1rem;
    
    .item{
      box-sizing: border-box;
      width: 30%;
      height: 4.3rem;
      margin-bottom: .1rem;
      border-radius: .05rem;
      overflow: hidden;
      .top{
        img{
          width: 100%;
          height: 2.5rem;
        }
        
      }
      
      .bottom{
        padding: .2rem;
        
        .name{
          font-size: .2rem;
          padding-bottom: .1rem;
        }
        
        .synopsis{
          line-height: .26rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
        }
      }
    }
  }
  
  
`