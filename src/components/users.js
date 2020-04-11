import React, { Component } from "react";
import User from "./user";

export class users extends Component {
  render() {
    const users = this.props.users;
    const userDetails = users.map((user) => <User user={user} />);
    return userDetails;
  }
}

export default users;
