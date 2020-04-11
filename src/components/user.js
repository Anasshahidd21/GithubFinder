import React, { Component } from "react";

export class user extends Component {
  render() {
    const { username, location } = this.props.user;
    return (
      <div>
        <div className="user-container">
          <h3>{username}</h3>
          <img src="#" alt="user-display"></img>
          <a href={location}>location</a>
        </div>
      </div>
    );
  }
}

export default user;
