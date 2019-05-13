import React, { Component } from 'react'
import Box from './Box';
import './boxContainer.css';

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: ['purple', 'yellow', 'lightblue', 'green' , 'brown', 'indigo', 'grey']
    }
  render() {
    const boxes = Array.from({length: this.props.numBoxes}).map(
      () => <Box colors={this.props.allColors}/>
    )
    return (
      <div className="boxcon">
        {boxes}
      </div>
    )
  }
}
export default BoxContainer;
