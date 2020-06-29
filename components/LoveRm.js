import React from 'react';
import Typed from 'typed.js';
class LoveRm extends React.Component {
  constructor(props){
    super()   
  }
 
  componentDidMount(){

    const strings =[
      '<span class="rm">一天天',
      '<span class="rm">一天天 \n在思念中结束</span>',
      '<span class="rm">一天天 \n在思念中结束\n在<span class="sinian">思念</span>中<strong>开始</strong></span>',
      '<span class="rm">始 终\n有 你</span>',
      '<span class="rm">真好</span>',
      '<span class="rm">瑞梅\n我喜欢你</span>',
      '<span class="rm"><strong>圆圆的脸庞</strong></span>',
      '<span class="rm"><strong>撅嘴</strong>的自拍</span>',
      '<span class="rm"><strong>夹菜</strong>的样子</span>',
      '<span class="rm">外冷内热的\n性格</span>',
      '<span class="rm">努力生气的\n样子</span>',
      '<span class="rm">你的一切\n......</span>',
      '<span class="rm">我的人生\n已经刻下\n你的<strong>痕迹</strong></span>',
      '<span class="rm"><span class="rui">瑞</span><span class="mei">梅</span>,我<span class="ai">爱</span>你\n</span><span class="rmEn"><span class="ai">Stay</span> With You\nForever !</span>'
    ];
    const options = {
    	strings:strings,
      typeSpeed: 100,
      backSpeed: 50,
      loop:false,
      cursorChar:'❤'
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
  render(){
    return (
      <div className="container">
        <div className="type-wrap">

          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }} 
          />
        </div>
      </div>
    )
  }
}
export default LoveRm
