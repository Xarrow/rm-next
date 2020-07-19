import React from 'react';

export default class BGMComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <video
                    onProgress={(event) => {
                        console.log(event)
                    }}
                    onCanPlay={() => {
                        console.log("can play")
                    }} controls src={"/static/audio/canon.mp3"} autoPlay muted loop={true} preload="auto"/>
            </>
        )
    }

}