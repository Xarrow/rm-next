import Bullet from "./Bullet";
import React from "react";
import { Input } from "antd";

const { Search } = Input;

export default class BulletWrapper extends React.Component {
  constructor(props) {
    super(props);
    // 记录页面打开时间
    this.state = { word: "", startTime: new Date().getTime() };
    this.launch = this.launch.bind(this);
  }

  launch(dan) {
    if ("" === dan) {
      return;
    }
    let index = new Date().getTime() % 7;
    if (index < 0) {
      index = Math.abs(index);
    }
    this.setState({ rowIndex: index });
    this.setState({ word: dan });

    // 记录发送时间
    // 保存 firebase ,(launchTime-startTime) ===> word
    const timeLine = new Date().getTime()-this.state.startTime;
  }
  render() {
    const renderBulletItem = (item) => {
      return <div className="item">{item}</div>;
    };
    return (
      <>
        <div className="bullet">
          <Bullet
            word={this.state.word}
            rowIndex={this.state.rowIndex}
            renderItem={renderBulletItem}
            speed={50}
            row={7}
            rowHeight={40}
            spacing={120}
          />
        </div>
        <div className="launch">
          <Search
            placeholder="输入弹幕"
            enterButton="发射"
            size="large"
            onSearch={this.launch}
          />
        </div>
      </>
    );
  }
}
