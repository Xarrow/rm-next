import React from 'react';
import Typed from 'typed.js';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';


class Home extends React.Component {
  componentDidMount(){
    const strings =[
      '一天\n在想念中结束\n在<span class="sinian">想念</span>中<strong>开始</strong>','你是我全部的时光',
      '<strong><span class="rui">瑞</span><span class="mei">梅</span>,</strong>我<span class="ai">爱</span>你\nRuiMei. I <span class="ai">Love</span> You\nForever !'
    ];
    const options = {
    	strings:strings,
      typeSpeed: 100,
      backSpeed: 100,
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
        {/* 
        <div className="sayLove"> 我爱你，瑞梅  </div>
        <div> </div>
        <div className="sayLoveEn">Love you forever</div>
        */ }
      </div>
    )
  }
}
export default Home
