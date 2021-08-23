import styled from "styled-components";

export const Wrapper = styled.div`
    width: var(--wrapper-width);
    margin: 0 auto;
  
    .list{
      display: flex;
      justify-content: space-between;
      
      .item{
        position: relative;
        width: 23%;
        height: 1.8rem;
        border:1px solid #eee;
        cursor: pointer;
        
        
        img{
          width: 100%;
          height: 100%;
          filter: blur(2px);
        }
        
        .text{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          color:#fff;
          font-size: .3rem;
          width: 1rem;
          letter-spacing:20px;
          text-align: center;
        }
      }
    }
`