import React from 'react';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <p>For more nonsense, you can follow me on <a href="https://twitter.com/KaiserFrose" target="_blank">Twitter.</a> If
		 you're unimpressed by my design skills and want to build something better, but aren't comfortable with NLP, checkout
		Max Woolf's fantastic <a href="https://github.com/minimaxir/gpt-2-simple" target="_blank">GPT-2-simple library</a>.</p>
      </div>
    )
  }
}

export default About;
