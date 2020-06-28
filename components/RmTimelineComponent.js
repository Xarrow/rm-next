// import styles from './TimeLineComponent.css'
import { Timeline } from 'antd';
import RmTimelineItemComponent from './RmTimelineItemComponent';
import { data } from './data.js';

export default function RmTimelineComponent(props ,){
  console.log(data)
  return(
    <div className={"rmTimeLine"}>
      <Timeline mode="alternate">
        {
          data.map((item,index)=>{
            return (
              <RmTimelineItemComponent 
                key={index} 
                text={item.text} 
                time={item.time} 
                />
            )
          })
        }
      </Timeline>
    </div>
  )
}
