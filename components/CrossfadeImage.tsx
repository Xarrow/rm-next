import React, {Component} from "react";

export default class CrossfadeImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: props.src
        }
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {

    }

    render() {
        return (
            <>
            </>
        )
    }
}

const defaultStyle = {maxWidth: "400px", maxHeight: "400px"};
