import React from 'react';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <p>For more ML projects, you can follow me on <a href="https://twitter.com/KaiserFrose" target="_blank">Twitter.</a> This
        project is free, but if you like, consider leaving a star on <a href="https://github.com/cortexlabs/cortex" target="_blank">Cortex,
        the open source ML infrastructure</a> I work on during the day.</p>
      </div>
    )
  }
}

export default About;
