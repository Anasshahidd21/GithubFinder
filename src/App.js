import React, { Component } from "react";
import "./App.css";
import Users from "./components/users";
// import user from "./components/user";
import axios from "axios";

export default class App extends Component {
  state = {
    users: [],
  };

  getAllUsers = async () => {
    const allUsers = await axios.get(
      `https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}?client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    );
    return allUsers.data;
  };

  async componentDidMount() {
    const users = await this.getAllUsers();
    this.setState({ users });
  }

  render() {
    return (
      <div className="App">
        <Users users={this.state.users} />
      </div>
    );
  }
}

// getAllUsers = async () => {
//   const allUsers = await axios.get(
//     `https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}?client_secret=${process.env.GITHUB_CLIENT_SECRET}`
//   );
//   console.log(allUsers.data);
//   return allUsers.data;
// };

// import React, { Component } from "react";

// class App extends Component() {
//   constructor() {
//     super();
//     this.state = {
//       users: [],
//     };
//   }

//   async componentWillMount() {}

//   render() {
//     const users = [
//       {
//         username: "anas",
//         location: "www.facebook.com",
//       },
//       {
//         username: "shahid",
//         location: "www.facebook123.com",
//       },
//       {
//         username: "saad",
//         location: "www.gmail.com",
//       },
//     ];
//     return (
//       <div className="App">
//         <Users users={users} />
//       </div>
//     );
//   }
// }

// export default App;
