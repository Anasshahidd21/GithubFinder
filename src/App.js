import React from "react";
import "./App.css";
import Users from "./components/users";

function App() {
  const user = [
    {
      username: "anas",
      location: "www.facebook.com",
    },
    {
      username: "shahid",
      location: "www.facebook123.com",
    },
    {
      username: "saad",
      location: "www.gmail.com",
    },
  ];
  return (
    <div className="App">
      <Users users={user} />
    </div>
  );
}

export default App;
