import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { CustomInput } from "./CustomInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const inputs = [
    {
      label: "Email",
      type: "email",
      name: "email",
      required: true,
      placeholder: "John@email.com",
    },
    {
      label: "Password",
      type: showPassword ? "text" : "password",
      name: "password",
      required: true,
      type: showPassword ? "text" : "password",
      placeholder: "*******",
    },
  ];
  return (
    <Form>
      {inputs.map((item, i) => (
        <CustomInput key={i} {...item} />
      ))}

      <InputGroup className="mb-3">
        <FormControl
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="*******"
          name="password"
          required
        />
        <InputGroup.Text
          onClick={togglePasswordVisibility}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
        </InputGroup.Text>
      </InputGroup>

      <div className="d-grid">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>

      <div className="text-end mt-4">
        Are you new here? <a href="/signup">Signup</a> now
      </div>
    </Form>
  );
};
