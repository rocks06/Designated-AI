import React, { Component } from "react";

class ContainerMid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collMid: [
        {
          id: 1,
          subtitle: "04",
          title: "Build vs Buy vs Delegate",
          text:
            "Decide deliberately where AI should be a core capability, a purchased solution, or an outsourced function.",
        },
        {
          id: 2,
          subtitle: "05",
          title: "Competitive Pressure Mapping",
          text:
            "Identify where AI-first competitors attack first: speed, cost, personalization, or scale. Know your vulnerabilities.",
        },
      ],
    };
  }

  render() {
    return (
      <div
        className="chapter-list border-right-0"
        style={{ marginTop: 84 }} 
      >
        {this.state.collMid.map((data) => (
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

export default ContainerMid;