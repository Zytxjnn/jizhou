import styled from "styled-components";

export const Wrapper = styled.div`
  margin: .4rem auto;
  background-color: #272732;
  color:#fff;

  
  .top{
    width: var(--wrapper-width);
    margin:0 auto;
    padding: .1rem 0;
    border-bottom: 1px solid #ccc;
   
    
    .about{
      font-size: .18rem;
    }
    
    .number{
      border-right: 1px solid #fff;
      padding-right: .2rem;
      margin-left: .3rem;
    }
    
    .address{
      margin-left: .1rem;
    }
  }
  
  .content{
    width: var(--wrapper-width);
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    padding: .2rem 0;
    
    .left{
      display: flex;
      justify-content: space-between;
      width: 60%;
      
      .title{
        font-size: .18rem;
        cursor: pointer;
        margin-top: .2rem;
        margin-bottom: .2rem;
      }
      
      .sub-title{
        color:#7E808A;
        cursor: pointer;
        line-height: .3rem;
      }
    }
    
    .right{
      display: flex;
      
      img{
        width: 1.3rem;
        margin: 20px;
        cursor: pointer;
        transition: all .3s linear;
        
        &:hover{
          transform: scale(1.5);
        }
      }
    }
  }
  
  .bottom{
    width: var(--wrapper-width);
    margin:0 auto;
    text-align: center;
    border-top:1px solid #ccc;
    padding: .1rem;

    span:not(:last-child) {
      border-right: 1px solid #ccc;
      margin-right: 20px;
      padding-right: 20px;
    }
  }
`