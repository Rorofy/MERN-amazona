import { Alert } from "react-bootstrap";

/* eslint-disable react/prop-types */
const MessageBox = (props) => {
  return <Alert variant={props.variant || "info"}> {props.children} </Alert>;
};

export default MessageBox;
