import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${props => {
    return props.pathname === '/' ? 'none' : 'block'}
  };
  position: relative;
  

  .title {

    padding: .08rem;
    font-size: .3rem;
    color: #fff;
    position: absolute;
    bottom: -.5rem;
    left: 3rem;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .6);

    span {
      display: block;
      width: 2rem;
      border: 2px solid #fff;
      padding: .06rem .2rem;
    }
  }

  img {
    width: 100%;
    height: 3.7rem;
  }
`