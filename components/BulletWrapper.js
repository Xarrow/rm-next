import Bullet from 'react-bullet-screen';
import React, { useState } from 'react'

const text = [
    '我是第一条弹幕',
    '我是第二条弹幕啊',
    '我是第三条弹幕啊啊',
    '我是第四条弹幕啊啊啊',
    '我是第五条弹幕啊啊啊啊',
]

export default class BulletWrapper extends React.Component {
    render() {

        const renderBulletItem = (item) => {
            return <div className="item">{item}</div>
        }
        return (
            <div className="bullet">
                <Bullet
                    data={text}
                    renderItem={renderBulletItem}
                    speed={50}
                    row={3}
                    rowHeight={40}
                    spacing={120}
                />
            </div>
        )
    }
}