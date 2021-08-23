import styled from "styled-components";
import {container} from "@/assets/css/mixin";

export const Wrapper = styled.div`
  ${container()}

  .content {
    padding-top: 20px;
    margin-bottom: 40px;

    .more {
      display: inline-block;
      cursor: pointer;
      border-bottom: 2px solid #000;
      padding-bottom: 5px;
      font-size: 14px;
      width: 58px;

      &:hover {
        color: #4e81ec;
        border-bottom-color: #4e81ec;
      }
    }


    .top.right {
      .left {
        order: 2;
      }

    }

    .top {
      display: flex;
      justify-content: space-between;
      height: 600px;


      .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 49%;

        img {
          width: 100%;
          height: 400px;
        }
      }

      .title {
        font-size: 18px;

      }

      .synopsis {
        height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 20px;
        color: #7E808A;
        margin-bottom: 10px;
      }

      .right {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 49%;

        .item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 48%;
          height: 48%;


          img {
            width: 100%;
            height: 70%;
          }


        }

        .item:nth-child(1) {
          margin-bottom: 20px;
        }
      }
    }


    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      margin-top: 40px;
      background-color: #eee;

      i {
        width: 24%;
      }

      .item {
        width: 24%;

        margin-top: 20px;
        margin-bottom: 20px;

        .title {
          margin: 20px 0;
          font-size: 18px;
        }


        .synopsis {
          font-size: 14px;
          line-height: 26px;
          height: 78px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;

          color: #7E808A;
        }


      }
    }

    img {
      max-width: 100%;
    }
  }
`