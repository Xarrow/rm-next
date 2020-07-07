import React from 'react';
import Typed from 'typed.js';
import BulletWrapper from './BulletWrapper';

class LoveRm extends React.Component {
  constructor(props) {
    super()
  }

  componentDidMount() {

    const strings = [
      '<span class="rm">一朝一夕<img src="/static/img/sun.png"/></span>',
      '<span class="rm">一朝一夕<img src="/static/img/sun.png"/>\n从<span class="sinian bigger">「 思念 」</span>中\n结束</span>',
      '<span class="rm">一朝一夕<img src="/static/img/sun.png"/>\n由思念中\n<span class="kaishi bigger">「 开始 」</span></span>',
      '<span class="rm">始 终\n有 <span class="bigger">你</span></span>',
      '<span class="rm">朝 <span class="bigger">夕</span>\n   <span class="bigger">相</span> 处</span>',
      '<span class="rm">一点一滴</span>',
      '<span class="rm">你 <span class="bigger">撅嘴</span> 时自拍</span>',
      '<span class="rm">你夹菜时\n   和筷子<img src="/static/img/chop.png"/> <span class="bigger">较劲</span></span>',
      '<span class="rm">你外冷内热\n <span class="bigger">「 个性 」</span></span>',
      '<span class="rm">你\n<span class="bigger">「努力生气」</span></strong>\n样子</span>',
      '<span class="rm">你的一切\n<span class="bigger">「可爱😋」</span>\n......</span>',
      '<span class="rm">深融我心中</span>',
      '<span class="rm">我 ! ! !</span>',
      '<span class="rm">无所畏惧</span>',
      '<span class="rm">一往无前</span>',
      '<span class="rm"><span class="wo">我<span class="ai bigger"> 喜欢 </span>你,瑞梅\n</span><span class="rmEn"><span class="ai">Stay</span> With You\nForever !</span>'
    ];
    const options = {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 130,
      loop: false,
      cursorChar: '❤'
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
  render() {
    return (
      <div>
        <BulletWrapper />
        <div className="container">
          <div className="type-wrap">

            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
          </div>
        </div>
      </div>

    )
  }
}
export default LoveRm
