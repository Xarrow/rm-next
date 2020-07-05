import Bullet from "./Bullet";
import React from "react";
import { Input } from "antd";

const { Search } = Input;
const action = function (type, timeline, words) {
  return JSON.stringify({
    type,
    timeline,
    words,
  });
};

const googleColorRgba = ["#3cba54", "#f4c20d", "#db3236", "#4885ed"];
const LAUNCH = 1;
const HEARTBEAT = 2;

export default class BulletWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { word: "", ws: false, row: 7 };
    this.launch = this.launch.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.print = this.print.bind(this);
    this.ws = undefined;
  }

  componentDidMount() {
    this.ws = new WebSocket("ws://127.0.0.1:8080/launch");
    this.ws.onopen = function (data) {
      console.log("ws open");
    };

    // 监听消息
    this.handleMessage();

    // 记录页面打开时间
    const startTimeStamp = new Date().getTime();
    this.setState({ startTimeStamp: startTimeStamp });

    setTimeout(() => {
      this.print("你好");
    }, 1);

    setTimeout(() => {
      this.print("你好1");
    }, 1);
  }

  print(data) {
    const timestamp = new Date().getTime();
    const index = timestamp % this.state.row;
    if (index < 0) {
      index = Math.abs(index);
    }
    // 弹幕背景
    const itemBackgroupColor =
      googleColorRgba[timestamp % googleColorRgba.length];
    console.log(`${timestamp} ==> ${itemBackgroupColor}`);
    this.setState({
      rowIndex: index,
      word: data,
      itemBackgroupColor: itemBackgroupColor,
    });
  }
  launch(dan) {
    const timeline = new Date().getTime() - this.state.startTimeStamp;
    if ("" === dan) {
      return;
    }
    this.print(dan);

    if (this.ws.state !== WebSocket.OPEN) {
      return;
    }
    // ws has open
    // send to ws
    this.ws.send(action(0, timeline, dan));
  }

  handleMessage() {
    if (this.ws.state === WebSocket.OPEN) {
      this.ws.onmessage = function (data) {
        if (!data) {
          return;
        }
        data.array.forEach((element) => {
          this.print(element);
        });
      };
    }
  }
  render() {
    const renderBulletItem = (item) => {
      return <div className="item">{item}</div>;
    };
    return (
      <>
        <div className="bullet">
          <Bullet
            itemBackgroupColor={this.state.itemBackgroupColor}
            word={this.state.word}
            rowIndex={this.state.rowIndex}
            renderItem={renderBulletItem}
            speed={50}
            row={this.state.row}
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
