import React from 'react';
import { Modal, Button, Form, Input, message } from 'antd';
import { HandleAuth } from  '../components/SimpleAuth';

class Ant extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: false
        }
        this.onFinish = this.onFinish.bind(this)
    }
    componentDidMount(){
        HandleAuth()
    }
    onFinish(data){
        console.log(`${data.Name} ==> ${data.Birth}`)
        if (data.Birth==='19931226'){
            this.setState({auth:true})
            window.localStorage.setItem("auth","1");
            message.success("今天又是爱瑞梅的一天~")
        }else{
            const errorRainbowFart = [
                '我已经看不下去了~',
                '好弱啊~',
                '放弃吧，老老实实问她吧~',
                '来来来，我来告诉你~',
                '连她的生日都记不住,垃圾~']
            message.error(errorRainbowFart[Math.floor(Math.random()*errorRainbowFart.length)])
        }
    }
    render() {
        return (
            <div className="Ant">
                <Modal
                    title="Hello RuiMei"
                    visible={!this.state.auth}
                    closable={false}
                    footer={[]}
                    onOk={this.handleOk}
                >
                    <Form
                        onFinish={this.onFinish}>
                        <Form.Item label="你的名字" name="Name" rules={[{
                            required:true,
                            message:"你的名字"
                        }]}>
                            <Input placeholder={"访客名字"}/>
                        </Form.Item>
                        <Form.Item label="瑞梅生日" name="Birth"  rules={[{
                            required:true,
                            message:"瑞梅的生日也要填哟~"
                        }]}>
                            <Input placeholder={"譬如 19940101 格式 ， 填对方可让你进去哟"}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Let Me In</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default Ant;