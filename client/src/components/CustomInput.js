import React, { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const CustomInput = ({ label, ...rest }) => {
  // const [showPassword, setShowPassword] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
};

export const CustomInputWSuffic = ({
  label,
  togglePasswordVisibility,
  showPassword,
  ...rest
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
      <InputGroup.Text
        onClick={togglePasswordVisibility}
        style={{ cursor: "pointer" }}
      >
        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
      </InputGroup.Text>
    </Form.Group>
  );
};
