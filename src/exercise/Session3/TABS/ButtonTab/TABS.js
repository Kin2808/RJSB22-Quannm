import React, { Component } from "react";
import "./TABS.css";

export default class TABS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    };
  }
  // setContent = () => {
  //     this.setState ({
  //         content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.'
  //     })
  // }
  // setContent1 = () => {
  //     this.setState ({
  //         content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
  //     })
  // }
  // setContent2 = () => {
  //     this.setState ({
  //         content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.'
  //     })
  // }
  // setContent3 = () => {
  //     this.setState ({
  //         content: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
  //     })
  // }

  render() {
    const testMap = [
      {
        name: "HISTORY",
        content:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
      },
      {
        name: "APPROACH",
        content:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
      },
      {
        name: "CULTURE",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.",
      },
      {
        name: "METHOD",
        content:
          "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      },
    ];

    return (
      <div className="tabs-main">
        <div
          style={{
            fontSize: `25px`,
            fontWeight: `lighter`,
            margin: `10px 0 80px`,
          }}
        >
          BUTTON TABS
        </div>
        <div className="tabs">
          <div className="tabs-info">
            {testMap.map((data, index) => (
              <button
                key={index}
                onClick={() => {
                  this.setState({
                    content: data.content,
                  });
                }}
              >
                {data.name}
              </button>
            ))}

            {/* <button onClick={this.setContent}>HISTORY</button>
        <button onClick={this.setContent1}>APPROACH</button>
        <button onClick={this.setContent2}>CULTURE</button>
        <button onClick={this.setContent3}>METHOD</button> */}
          </div>
          <div className="tabs-txt">{this.state.content}</div>
        </div>
      </div>
    );
  }
}
