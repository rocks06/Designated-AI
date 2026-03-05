import React, { Component } from 'react';

class ContainerLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collLeft: [
        {
            id: 1,
            subtitle: "01",
            title: "The 4A Framework",
            text:
            "Assess, Audit, Align, Activate. Anchor AI to business goals before tools, pilots, or budgets. The foundation everything else builds on."
        },
        {
            id: 2,
            subtitle: "02",
            title: "First-Win Strategy",
            text:
            "Build momentum through one visible, high-impact AI win that earns trust and drives adoption across the organization."
        },
        {
            id: 3,
            subtitle: "03",
            title: "AI as Leverage, Not Replacement",
            text:
            "Design strategy assuming humans remain accountable; AI multiplies judgment and capacity rather than eliminating roles."
        }
        ],
    };
  }

  render() {
    return (
      <div className="chapter-list border-right-0">
        {this.state.collLeft.map((data) => (
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

export default ContainerLeft;