import React, { Children, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { CustomInput, CustomInputWSuffic } from "./CustomInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { postUser } from "../helper/axiosHelper";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    const { confirmPassword, ...rest } = form;

    // lets check password if they match
    if (confirmPassword !== rest.password) {
      return alert("password doesnt match");
    }
    // call axios to makethe post

    const data = postUser(rest);
    console.log(data);
  };
  const inputs = [
    {
      label: "Name",
      type: "text",
      name: "name",
      required: true,
      placeholder: "John",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      required: true,
      placeholder: "John@emial.com",
    },
    // {
    //   label: "Password",
    //   type: "password",
    //   name: "password",
    //   required: true,
    //   type: showPassword ? "text" : "password",
    //   placeholder: "xxxxxx",
    // },
    // {
    //   label: "Confirm Password",
    //   type: "password",
    //   name: "confirmPassword",
    //   required: true,
    //   type: showPassword ? "text" : "password",
    //   placeholder: "xxxxxx",
    // },
  ];
  return (
    <Form>
      {inputs.map((item, i) =>
        item.type === "password" ? (
          <CustomInputWSuffic
            key={i}
            {...item}
            onClick={togglePasswordVisibility}
            OnChange={handleOnChange}
          />
        ) : (
          <CustomInput key={i} {...item} />
        )
      )}

      <Form.Label>Password</Form.Label>
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
      <Form.Label>Confirm Password</Form.Label>
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
        Already user? <a href="/">Login</a> now
      </div>
    </Form>
  );
};
