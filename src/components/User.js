import React from "react";
import { List, Image } from "semantic-ui-react";

const User = ({ user, renderModal }) => {
  return (
    <List.Item onClick={() => renderModal(user)}>
      <Image
        avatar
        src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg"
      />
      <List.Content>
        <List.Header as="a">{user.real_name}</List.Header>
      </List.Content>
    </List.Item>
  );
};

export default User;
