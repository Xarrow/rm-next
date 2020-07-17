import React, {PureComponent} from "react";
import ReactDOM from "react-dom";

class RmImageComponent extends PureComponent<{}> {
    render() {
        return (
            <>
                <img width={400} height={400} src={"../static/img/20200717084508.png"} alt={"YRM"}/>
            </>
        );
    }
}

export default RmImageComponent;