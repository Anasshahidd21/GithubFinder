import React, { Component } from "react";

export class user extends Component {
  render() {
    const { login, node_id, avatar_url, url } = this.props.user;
    return (
      <div>
        <div key={node_id} className="user-container">
          <h3>{login}</h3>
          <img src={avatar_url} alt="user-display"></img>
          <a href={url}>location</a>
        </div>
      </div>
    );
  }
}

export default user;
