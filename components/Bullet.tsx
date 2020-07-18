import React, {PureComponent} from "react";
import ReactDOM from "react-dom";

interface BulletProps {
    renderItem: (item: any) => React.ReactElement;
    speed?: number; // px/s
    row?: number;
    rowHeight?: number;
    spacing?: number;
    word: string;
    rowIndex: number;
    itemBackgroupColor: string;
}

class Bullet extends PureComponent<BulletProps, {}> {
    static defaultProps = {
        speed: 50,
        row: 7,
        rowHeight: 40,
        spacing: 120,
        renderItem: () => undefined,
    };

    launchedCount: number;

    bulletRef: HTMLDivElement;

    srollWidth: number;

    timer: number;

    constructor(props) {
        super(props);
        this.launchedCount = 0; // 已经发射的弹幕数
        this.srollWidth = document.body.clientWidth;
    }

    componentDidUpdate() {
        this.launchBarrge(this.props.word, this.props.rowIndex, this.props.itemBackgroupColor);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    /**
     * 发射弹幕
     */
    launchBarrge(bullet, rowIndex, itemBackgroupColor) {
        if (!bullet) return;
        const bulletEle = this.createBulletEle(bullet, rowIndex, itemBackgroupColor);
        if (this.bulletRef) this.bulletRef.appendChild(bulletEle);
        const {speed, spacing} = this.props;
        let bulletWidth = bulletEle.offsetWidth;
        // 拿不到宽度按一屏处理
        if (bulletWidth === 0) bulletWidth = this.srollWidth;
        // 全程滚动距离
        const distance = this.srollWidth + bulletWidth;

        const duration = distance / speed;
        // 弹幕滚动至spacing所需时间
        const time = (bulletWidth + spacing) / speed;

        bulletEle.style.transform = `translateX(${-distance}px)`;
        bulletEle.style.transition = `transform ${duration}s linear`;
    }

    /**
     * 创建弹幕元素
     * @param {*} bullet
     * @param {*} rowIndex // 所在行
     */
    createBulletEle(bullet, rowIndex, itemBackgroupColor) {
        const {renderItem, rowHeight} = this.props;
        const div = document.createElement("div");

        div.classList.add("bulletreact-bullet-screen-item");
        div.style.top = `${rowIndex * rowHeight}px`;
        div.style.left = `${this.srollWidth}px`;
        div.style.position = "absolute";
        div.style.whiteSpace = "nowrap";
        div.style.margin = "2px";
        div.style.backgroundColor = itemBackgroupColor;
        div.style.borderRadius = "15px";
        div.style.padding = "0px 12px";
        div.style.color = "#ffff";
        div.style.boxShadow = `0px 0px 10px ${itemBackgroupColor}`
        div.style.fontSize = "15px";
        div.style.fontFamily = "Google Sans"

        const handleTransitionEnd = () => {
            // 弹幕运动完成后移除监听，清除弹幕
            div.removeEventListener("transitionend", handleTransitionEnd);
            this.bulletRef.removeChild(div);
        };
        div.addEventListener("transitionend", handleTransitionEnd);

        ReactDOM.render(renderItem(bullet), div);
        return div;
    }

    render() {
        const {row, rowHeight} = this.props;
        return (
            <div
                className="react-bullet-screen"
                style={{
                    position: "relative",
                    overflow: "hidden",
                    minHeight: `${row * rowHeight}px`,
                }}
                ref={(ref) => {
                    this.bulletRef = ref;
                }}
            />
        );
    }
}

export default Bullet;
