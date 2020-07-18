import React, {PureComponent} from "react";
import CrossfadeImage from './CrossfadeImage2';
import {UserAgent, UserAgentProvider} from '@quentin-sommer/react-useragent'


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
            imgSrc: image_list[0]
        }

    }


    componentDidMount() {
        let index = 0;
        setInterval(() => {
            if (index === image_list.length) {
                index = 0
            }
            this.setState({imgSrc: image_list[index++]})
        }, 5000)
    }

    render() {

        return (
            <div className="RmImage">
                <CrossfadeImage
                    delay={0}
                    src={this.state.imgSrc} alt={"cr"}/>
            </div>
        );
    }
}

export default RmImageComponent;