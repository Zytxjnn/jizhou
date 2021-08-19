import styled from "styled-components";

export const Wrapper = styled.div`
  .slick-dots{
    display: none !important;
  }
  
 position: relative;
  
  img{
    width: 100%;
    max-height: 90vh;
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
