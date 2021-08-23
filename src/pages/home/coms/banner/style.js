import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  .slick-dots{
    display: none !important;
  }
  
  img{
    width: 100%;
  }
  
  .switch{
    position: absolute;
    bottom: .3rem;
    right: .2rem;
    display: flex;
    z-index: 2;
    
    .btn{
      display: flex;
      justify-content: center;
      align-items: center;
      width: .4rem;
      height: .4rem;
      background-color: #eeeeed;
      cursor: pointer;
      margin-right: .2rem;
      user-select: none;
    }
  }
`
