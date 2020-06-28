import { Timeline,Row, Col, Divider } from 'antd';

const RmTimelineItemComponent  =(props)=> {
  const index =  props.index;
    return  (<div className="RmTimelineItem">
    <Timeline.Item {...props}>
      <Row>
        <Col flex={3}>{`${props.time}`}</Col>
      </Row>
      <Row>
        <Col flex={2} style={{color:"red"}}>{`${props.text}`}</Col>
      </Row>
      <Row>
        <Col flex={3}> 
        </Col>
      </Row>
    </Timeline.Item>
  </div>)
}

export default RmTimelineItemComponent;
