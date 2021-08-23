import styled from "styled-components";
import {container} from "@/assets/css/mixin";

export const Wrapper = styled.div`
  ${container()}


  .view {
    display: flex;
    margin-top: 40px;

    .content {
      flex: 1;
      overflow: hidden;

    }

    .sidebar {
      box-sizing: border-box;
      width: 17%;
      margin-left: 30px;

      > .title {
        font-size: 30px;
      }

      .list {
        .item {
          display: flex;
          align-items: center;
          margin-top: 20px;
          cursor: pointer;

          .img {
            width: 60%;
          }

          .title {
            width: 30%;
            font-size: 15px;
            margin-left: 30px;
          }
        }
      }
    }
  }
`