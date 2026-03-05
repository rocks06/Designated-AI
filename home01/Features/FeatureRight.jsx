import React, { Component } from 'react';

class FeatureRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collRight: [
        {
          id: 1,
          icon: 'fa fa-check',
          title: 'Consultants & advisors',
          text: 'Professionals helping clients navigate AI adoption responsibly.',
        },
        {
          id: 2,
          icon: 'fa fa-check',
          title: 'Not for technologists',
          text: 'This is not a deep technical guide or model-building handbook.',
        },
      ],
    };
  }

  render() {
    return (
      <div className="topic-items">
        {this.state.collRight.map((data) => (
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

export default FeatureRight;