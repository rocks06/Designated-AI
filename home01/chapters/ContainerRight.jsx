import React, { Component } from 'react';

class ContainerRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collRight: [
        {
          id: 1,
          subtitle: 'Pressure',
          title: 'Competitive pressure mapping',
          text:
            'Identify where AI creates real competitive advantage in your market.',
        },
        {
          id: 2,
          subtitle: 'Focus',
          title: 'Use-case prioritization',
          text:
            'Rank opportunities by impact, feasibility, and risk so you don’t get lost in “AI everywhere.”',
        },
        {
          id: 3,
          subtitle: 'System',
          title: 'Sustaining adoption',
          text:
            'How to keep progress after the first win with cadence, ownership, and feedback loops.',
        },
      ],
    };
  }

  render() {
    return (
      <div className="chapter-list border-right-0">
        {this.state.collRight.map((data) => (
          <div className="chapter-item" key={data.id}>
            <h4>
              <span>{data.subtitle} </span> {data.title}
            </h4>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ContainerRight;