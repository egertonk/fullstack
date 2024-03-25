import React from "react";
import { Modal } from "react-bootstrap";

type props = {
  show: boolean;
  onHide: () => void;
  MajorDuties: string[];
  title: string;
};

export const VerticallyCenteredModal: React.FC<props> = (props) => {
  console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {props.MajorDuties.map((duty, index) => (
            <ol key={index + "-duty"}>{duty}</ol>
          ))}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide} className="btn btn-outline-success">
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
