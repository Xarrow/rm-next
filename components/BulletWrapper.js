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

const BROADCAST_FLAG = 0;
const P2P_FLAG = 1;
// process
const INIT = 0;
const MESSAGE = 1;
const HEARTBEAT = 2;

const googleColorRgba = ["#3cba54", "#f4c20d", "#db3236", "#4885ed"];

export default class BulletWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { word: "", row: 7 };
        this.print = this.print.bind(this);
        this.launch = this.launch.bind(this);
        this.handleMessage = this.handleMessage.bind(this);

        this.ws = undefined;
    }

    componentDidMount() {
        // this.ws = new WebSocket("ws://127.0.0.1:8080/launch");
        this.ws = new WebSocket("wss://rm2springboot.herokuapp.com/launch");
        this.ws.onopen = (data) => {
            // 初始化
            this.ws.send(action(INIT, 0, ""))
            console.log("ws open");
        };

        // 监听消息
        this.handleMessage();

        // 记录页面打开时间
        const startTimeStamp = new Date().getTime();
        this.setState({ startTimeStamp: startTimeStamp });
    }

    print(data) {
        const timestamp = new Date().getTime();
        let index = timestamp % this.state.row;
        if (index < 0) {
            index = Math.abs(index);
        }
        // 弹幕背景
        const itemBackgroupColor = googleColorRgba[timestamp % googleColorRgba.length];
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
        // this.print(dan);
        // ws has open
        // send to ws
        this.ws.send(action(MESSAGE, timeline, dan));
    }

    // 监听消息
    handleMessage() {
        this.ws.onmessage = (event) => {
            let data = event.data
            if (!data) {
                return
            }
            data = JSON.parse(data)
            // debugger
            switch (data.type) {
                case INIT:
                    break;
                case MESSAGE:
                    // 单项返回
                    switch (data.source) {
                        case BROADCAST_FLAG:
                            this.print(data.words)
                            break;
                        case P2P_FLAG:
                            setTimeout(() => {
                                this.print(data.words)
                            }, data.timeline)
                            break;
                    }

                    break;
                case HEARTBEAT:
                    break
            }

        };
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
