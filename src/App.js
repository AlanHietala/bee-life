import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PieChart from './PieChart.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      segments: [{level:5, name: 'Process'},
      {level:5, name: 'Technology'},
      {level:5, name: 'Delivery'},
      {level:5, name: 'Product'},
      {level:5, name: 'Team'},
      {level:5, name: 'Leadership'},
      {level:5, name: 'Growth'},
      {level:5, name: 'Purpose'}],
    }
  }

  changeSegment = (event, index) => {
      const newsegments = [...this.state.segments];
      newsegments[index] = {
        ...newsegments[index],
        level: event.target.value
      }
      this.setState({
        segments: newsegments
      })
  }

  render() {
    return (
      <div>
      <PieChart
        x={100}
        y={100}
        outerRadius={100}
        innerRadius={0}
        segments={5}
        data={this.state.segments.map((level) => {
          return {
            value: 30,
            level: level.level
          }
        })}
      />
      {
        this.state.segments.map((level, index) => {
            return (<div><label>{level.name}</label><input onChange={(event) => this.changeSegment(event, index)} /></div>)
        })
      }

      </div>
    );
  }
}

export default App;
