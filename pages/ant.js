import React from 'react';
import { Modal, Button, Space, Form, Input, Checkbox } from 'antd';

import { ExclamationCircleOutlined } from '@ant-design/icons';

class Ant extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            auth: false
        }
        this.handleOk  = this.handleOk.bind(this)
    }
    
    componentDidMount() {
    }
    componentDidUpdate() {

    }
   
    handleOk(data){
        console.log("ok")
        this.setState({auth:true})
    }
    render() {
        return (
            <div>
                <Modal 
                    title="Hello RuiMei"
                    visible={!this.state.auth}
                    onOk={this.handleOk}
                >
                    地球是圆的
                    Go Far Away
                </Modal>
                <div className="testFont">
                    ❤ Google
                </div>
            </div>
        )
    }
}

export default Ant;