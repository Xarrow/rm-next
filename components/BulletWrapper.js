import Bullet from './Bullet';
import React from 'react'
import { Input } from 'antd';

const { Search } = Input;

export default class BulletWrapper extends React.Component {
    constructor(props){
        super(props);
        this.state = {word:""}
        this.launch = this.launch.bind(this)
    }

    launch(dan){
        console.log(dan)
        console.log(dan==="")
        if (""===dan){
            return;
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