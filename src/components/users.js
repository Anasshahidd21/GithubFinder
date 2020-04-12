import React, { Component } from "react";
import User from "./user";

export class Users extends Component {
  render() {
    // return (
    //   <div>
    //     <h3>Sexy bois</h3>
    //   </div>
    // );
    const users = this.props.users;
    console.log(users);
    const userDetails = users.map((user) => <User user={user} />);
    return userDetails;
  }
}

export default Users;
