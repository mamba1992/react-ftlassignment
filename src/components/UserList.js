import React, { useState } from "react";
import UserModal from "./Modal";
// import { List, Image, Modal, Button, Header } from "semantic-ui-react";
import { List } from "semantic-ui-react";
import User from "./User";

const UserList = ({ users }) => {
  const [showModal, setModal] = useState(false);
  const [activeUser, setActiveUser] = useState({});
  const renderModal = (user) => {
    setActiveUser(user);
    setModal(true);
  };
  const userItem = users.map((user) => {
    return <User key={user.id} user={user} renderModal={renderModal} />;
  });
  return (
    <>
      <List divided relaxed>
        {userItem}
      </List>
      <UserModal
        showModal={showModal}
        setModal={setModal}
        activeUser={activeUser}
      />
    </>
  );
};
export default UserList;
