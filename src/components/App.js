import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Header } from "semantic-ui-react";
import UserList from "./UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchusers = async () => {
      const response = await axios.get("http://localhost:3001/members");
      const data = await response.data;
      setUsers(data);
    };
    fetchusers();
  }, []);
  return (
    <Container text>
      <Header as="h2">User List</Header>
      <UserList users={users} />
    </Container>
  );
};

export default App;
