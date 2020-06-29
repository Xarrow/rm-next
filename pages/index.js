import React from 'react';
import Typed from 'typed.js';
import { HandleAuth} from '../components/SimpleAuth';
class Home extends React.Component {
  constructor(props){
    super()   
  }
 
  componentDidMount(){
    HandleAuth()

    const strings =[
      '<span class="rm">一天',
      '<span class="rm">一天 \n在想念中结束</span>',
      '<span class="rm">一天 \n在想念中结束\n在<span class="sinian">想念</span>中<strong>开始</strong></span>',
      '<span class="rm">你是我的\n阳光</span>',
      '<span class="rm">你是我的\n黑夜</span>',
      '<span class="rm">始终\n有你</span>',
      '<span class="rm">瑞梅</span>',
      '<span class="rm"><strong><span class="rui">瑞</span><span class="mei">梅</span>,</strong>我<span class="ai">爱</span>你\n</span><span class="rmEn"><span class="ai">Stay</span> With You\nForever !</span>'
    ];

    const strings2 =[
      '<span class="rm"><span class="sinian">梅花香自苦寒\n瑞雪兆丰年</span><strong>开始</strong></span>',
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
export default Home
