import React from 'react';
import { Carousel } from 'antd';
import Content from '../../section/Testimonials/Content';
const contentStyle = {
  // height: '160px',
  color: '#fff',
  // lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Slider = () => (
  <Carousel autoplay>
    <div style={contentStyle} className=' overflow-hidden rounded-l-3xl'>
      <Content/> 
    </div>
    {/* <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div> */}
  </Carousel>
);
export default  Slider