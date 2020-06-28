import React from 'react';
import Typed from 'typed.js';


class Home extends React.Component {
  componentDidMount(){
    const strings =[
    	'一日之中 \n 我的生活瑞梅</strong> 最近好吗？',
      '瑞梅，我爱你~'
    ];
    const options = {
    	strings:strings,
      typeSpeed: 100,
      backSpeed: 100,
      loop:false
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
          <span class="typed-cursor"> ❤ </span>
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
