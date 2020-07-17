import Hello from '../components/ConnectTotalComponent'
import QueueAnim from 'rc-queue-anim';

const ts = () => {
    return (
        <>
            <Hello name={"yuruimei"} age={28}/>
            <QueueAnim delay={600} className="queue-simple">
                <div key="a">Queue Demo</div>
                <div key="b">Queue Demo</div>
                <div key="c">Queue Demo</div>
                <div key="d">Queue Demo</div>
                <img width={400} height={400} src={"../static/img/20200717084508.png"} alt={"YRM"}/>
            </QueueAnim>
        </>
    )
}

export default ts;