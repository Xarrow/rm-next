import Bullet from "./Bullet";
import React from "react";
import {Input} from "antd";

const {Search} = Input;
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
let retryInterval = undefined
let reconnectFlag = false
export default class BulletWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {word: "", row: 13};
        this.print = this.print.bind(this);
        this.launch = this.launch.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.heartbeart = this.heartbeart.bind(this)
        this.happyWork = this.happyWork.bind(this)
        this.proxySend = this.proxySend.bind(this)

        this.ws = undefined;
    }

    componentDidMount() {
        this.happyWork()
        // 记录页面打开时间
        this.setState({startTimeStamp: new Date().getTime()});
    }

    proxySend(type, timeline, words) {
        if (this.ws.readyState === WebSocket.CLOSING ||
            this.ws.readyState === WebSocket.CLOSED ||
            this.ws.readyState === WebSocket.CONNECTING) {
            return;
        }
        this.ws.send(action(type, timeline, words))
    }

    happyWork() {
        // this.ws = new WebSocket("wss://rm2springboot.herokuapp.com/launch");
        this.ws = new WebSocket("ws://127.0.0.1:8080/launch");
        this.ws.onopen = (data) => {
            // 清楚重试
            if (null != retryInterval || undefined !== retryInterval) {
                clearInterval(retryInterval);
                retryInterval = undefined;
            }
            // 初始化
            this.proxySend(INIT, 0, "")
            console.log("ws open")
            // 监听消息
            this.handleMessage()
            // 心跳
            this.heartbeart()
            // 回调
            this.props.onWebSocketOpen({wsOpen: true})
        };

        this.ws.onclose = (event) => {
            if (null != retryInterval || undefined !== retryInterval) {
                console.log("has register interval")
                return;
            }
            retryInterval = setInterval(() => {
                this.happyWork()
            }, 5000);
        }
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

    heartbeart() {
        setInterval(() => {
            this.proxySend(HEARTBEAT, 0, "")
        }, 7000)
    }

    launch(dan) {
        const timeline = new Date().getTime() - this.state.startTimeStamp;
        if ("" === dan) {
            return;
        }
        this.proxySend(MESSAGE, timeline, dan)
    }

    // 监听消息
    handleMessage() {
        this.ws.onmessage = (event) => {
            let data = event.data
            if (!data) {
                return
            }
            data = JSON.parse(data)
            switch (data.type) {
                case INIT:
                    break;
                // 报文返回
                case MESSAGE:
                    switch (data.source) {
                        // 广播内容立马打印
                        case BROADCAST_FLAG:
                            this.print(data.words)
                            break;
                        case P2P_FLAG:
                            // P2P 广播按照时间超时
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
                        enterButton="发送"
                        size="large"
                        onSearch={this.launch}
                    />
                </div>
            </>
        );
    }
}