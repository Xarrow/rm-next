import React from 'react';
import BulletWrapper from './BulletWrapper';
import TypeLoveComponent from './TypeLoveComponent';
import RmImageComponent from './RmImageComponent';
import {Spin} from 'antd';

class LoveRm extends React.Component {
    constructor(props) {
        super(props)
        this.setWebSocketState = this.setState.bind(this);
        this.state = {
            wsOpen: false
        }
    }


    render() {
        return (
            <div>
                <Spin className={"spin"} tip="玩命连接爱心❤服务器..." size={"large"} spinning={!this.state.wsOpen}>
                    {/* 图片*/}
                    {this.state.wsOpen ? <div className="subContainer">
                        <RmImageComponent/></div> : <></ >}
                    {/*    回调等待 websocket 连接完成*/}
                    <BulletWrapper onWebSocketOpen={this.setWebSocketState}/>
                    {/* typejs*/}
                    {this.state.wsOpen ? <div className="mainContainer">
                        <TypeLoveComponent/></div> : <></>}
                </Spin>

            </div>

        )
    }
}

export default LoveRm
