import React, { useState } from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import ActivityList from "./ActivityList";
import "react-datepicker/dist/react-datepicker.css";
import "./Modal.css";

const UserModal = ({ showModal, setModal, activeUser }) => {
  const [startDate, setDate] = useState(new Date());

  const closeModal = () => {
    setModal(false);
  };
  const handleChange = (date) => {
    setDate(date);
  };
  return (
    <Modal
      onClose={() => setModal(false)}
      onOpen={() => setModal(true)}
      open={showModal}
    >
      <Modal.Header>
        User activity in a day
        <Icon name="close" className="close-icon" onClick={closeModal} />
      </Modal.Header>

      <Modal.Content>
        <Modal.Description>
          <DatePicker selected={startDate} onChange={handleChange} />
          <ActivityList selectedDate={startDate} activeUser={activeUser} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={closeModal}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
export default UserModal;
