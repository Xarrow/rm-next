import React from 'react';
import BulletWrapper from './BulletWrapper';
import TypeLoveComponent from './TypeLoveComponent';
import RmImageComponent from  './RmImageComponent';
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
                <RmImageComponent />
                {/*<Spin className={"spin"} tip="玩命连接爱心❤服务器..." size={"large"} spinning={!this.state.wsOpen}>*/}
                {/*    /!*    回调等待 websocket 连接完成*!/*/}
                {/*    <BulletWrapper onWebSocketOpen={this.setWebSocketState}/>*/}
                {/*    /!* 键入文件组件*!/*/}
                {/*    { this.state.wsOpen?<TypeLoveComponent/>:<></>}*/}
                {/*</Spin>*/}

            </div>

        )
    }
}

export default LoveRm
