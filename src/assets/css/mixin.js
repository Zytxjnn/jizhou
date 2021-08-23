import {css} from 'styled-components';

export function container(){
    return css`
      width: var(--wrapper-width);
      padding-top: var(--container-pd);
      margin:0 auto;
      min-height: 30vh;
      
      img{
        margin: 0 auto;
        max-width: 100%;
      }
      
      .content{
        margin: .2rem 0;
      }
    `
}