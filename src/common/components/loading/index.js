import React,{memo} from "react";
import {Wrapper} from './style';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default memo(function App() {
  return (
    <Wrapper>
      <Spin indicator={antIcon} tip="加载中..." />
    </Wrapper>
  );
})


