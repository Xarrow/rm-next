import Bullet from './Bullet';
import React from 'react'
import { Input } from 'antd';

const { Search } = Input;
const action = function (type, timeline,words) {
    return JSON.stringify({
        type,
        timeline,
        words,
    });
}

export default class BulletWrapper extends React.Component {
    constructor(props){
        super(props);
        this.state = {word:"",ws:false}
        this.launch = this.launch.bind(this)
        this.ws = undefined;
        
    }

    componentDidMount(){
        this.ws = new WebSocket('ws://127.0.0.1:8080/launch')
        this.ws.onopen = function(data){
            console.log("ws open")
        }
        const startTimeStamp = new Date().getTime()
        this.setState({startTimeStamp:startTimeStamp})
    }

    launch(dan){
        const timeline = new Date().getTime()-this.state.startTimeStamp
        console.log(dan)
        console.log(dan==="")
        if (""===dan){
            return;
        }
        
        // ws has open
        this.ws.send(action(0,timeline,dan));
        if(this.state.ws){
            
        }
        // let index = this.hashCode(dan)%7
        let index = new Date().getTime()%7;
        if(index<0){
            index = Math.abs(index)
        }
        this.setState({rowIndex:index})
        this.setState({word:dan})
    }
    hashCode(s) {
        var h = 0, l = s.length, i = 0;
        if ( l > 0 )
          while (i < l)
            h = (h << 5) - h + s.charCodeAt(i++) | 0;
        return h;
    }
    render() {
        const renderBulletItem = (item) => {
            return <div className="item">{item}</div>
        }
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
        )
    }
}