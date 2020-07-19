import React, {PureComponent} from "react";
import CrossfadeImage from './CrossfadeImage2';


const image_list = [
    "/static/img/20200717084508.png",
    "/static/img/20200717084548.png",
    "/static/img/20200717084557.png",
    "/static/img/20200718191409.png",
]

class RmImageComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: image_list[0],
            mClient: false // 是否是M端，M端作为背景 ， PC 端展示在左侧
        }

    }


    componentDidMount() {
        const isMClient = navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf(`Android`) > -1
        console.log("isMClient " + isMClient)
        this.setState({mClient: isMClient})

        let index = 0;
        setInterval(() => {
            if (index === image_list.length) {
                index = 0
            }
            this.setState({imgSrc: image_list[index++]})
        }, 7000)
    }

    render() {
        return (
            <div className={this.state.mClient ? "MClientRmImage" : "RmImage"}>
                <CrossfadeImage
                    delay={7}
                    src={this.state.imgSrc} alt={"yuruimei"}/>
            </div>
        );
    }
}

export default RmImageComponent;