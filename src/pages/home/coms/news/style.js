import styled from "styled-components";

export const Wrapper = styled.div`
    width: var(--wrapper-width);
    margin: 0 auto;
  
  .card{
    display: flex;
    height: 6rem;
    
    .text{
      width: 60%;
      
      >.top{
        display: flex;
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        
        >div{
          width: 50%;
          text-align: center;
          height: .6rem;
          line-height: .6rem;
          font-size: .2rem;
          cursor: pointer;
        }
        
        .left.right{
          background-color: #fff;
          color:#262b38;
        }

        
        .active{
          background-color: #262b38;
          color:#fff;
        }
      }
      
      .container{
        box-sizing: border-box;
        padding: .3rem;
        .list{
          .item{
            display: flex;
            align-items: center;
            border-bottom:1px solid #ccc;
            padding: .1rem;
            margin: .1rem 0;
            
            .left{
              width: .6rem;
              height: .6rem;
              background-color: #252a39;
              margin-right: .2rem;
              color:#fff;
              text-align: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              .top{
                font-size: .2rem;
               
              }
            }
            
            .right{
              flex:1;
              cursor: pointer;
              .title{
                color:#252a39;
              }
              
              .content{
                text-indent: 2em;
                color:#979797;
                line-height: .24rem;
                overflow:hidden;
                text-overflow:ellipsis;
                display:-webkit-box;
                -webkit-box-orient:vertical;
                -webkit-line-clamp:2;
          

              }
            }
          }
        }
      }
    }
    
    .carsouel{
      position: relative;
      width: 40%;
      
      .switch{
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        z-index: 10;
        
        .btn{
          width: .4rem;
          height: .4rem;
          color:#fff;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-weight: bolder;
          font-size: .2rem !important;
        }
        
        .prev{
          background-color: #dab64c;
        }
        .next{
          background-color: #343434;
        }
      }
      
      img{
        width: 100%;
        height: 6rem;
      }
    }
  }
    
`