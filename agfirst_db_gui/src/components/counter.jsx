import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    //imageUrl: "https://picsum.photos/200",
  };

  /*   constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } */
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  doHandleIncrement = () => {
    this.incrementCount({ id: 1 });
  };
  /*   styles = {
    fontSize: 50,
    fontWeight: "bold",
  }; */
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.incrementCount}
          className="btn m-2 btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.decrementCount}
          className="btn m-2 btn-secondary btn-sm"
        >
          decrement
        </button>

        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
