import React, { Component } from 'react';

class FeatureLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collLeft: [
        {
          id: 1,
          icon: 'fa fa-check',
          title: 'SMB owners & founders',
          text: 'Leaders responsible for growth, efficiency, and long-term competitiveness.',
        },
        {
          id: 2,
          icon: 'fa fa-check',
          title: 'Non-technical executives',
          text: 'Decision-makers who need to understand AI without learning to code.',
        },
        {
          id: 3,
          icon: 'fa fa-check',
          title: 'Operations leaders',
          text: 'People accountable for workflows, costs, and execution across teams.',
        },
      ],
    };
  }

  render() {
    return (
      <div className="topic-items">
        {this.state.collLeft.map((data) => (
          <div className="topic-item" key={data.id}>
            <div className="icon-box">
              <i className={data.icon}></i>
            </div>
            <div className="topic-content">
              <h4>{data.title}</h4>
              <p>{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FeatureLeft;