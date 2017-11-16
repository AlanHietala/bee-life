// ./src/components/Piechart/index.jsx

import React, { Component } from 'react';
import d3 from 'd3';
import { LabeledArc } from './Arc';

class Piechart extends Component {
    constructor() {
      super();

        this.pie = d3.layout.pie()
                     .value((d) => d.value);
        this.colors = d3.scale.category10();
    }

    arcGenerator(data, index) {
      return (
            <LabeledArc key={`arc-${index}`}
                        data={data}
                        innerRadius={this.props.innerRadius}
                        outerRadius={this.props.outerRadius}
                        color={"orange"} />
        );
    }

    render() {
      let pie = this.pie(this.props.data),
              translate = `translate(${this.props.x}, ${this.props.y})`;

          return (
            <svg height={this.props.x * 2}>
              <g transform={translate}>
                  {pie.map((data, index) => this.arcGenerator(data, index))}
              </g>
              </svg>
          )
    }
}

export default Piechart;
