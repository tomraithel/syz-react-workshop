import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Form = styled.form`
  display: flex;
  margin-top: 40px;
`;

const Input = styled.input`
  width: 100%;
  display: block;
  resize: none;
  padding: 20px;
  margin: 0 20px 0 0;
  font-size: 1em;
  border: 1px solid ${props => props.theme.color.gray2};
  background: ${props => props.theme.color.white};
`;

export default function Prompt({ onSubmit, buttonText, placeholder }) {
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        const cleanedValue = e.target.message.value.trim();
        if (cleanedValue !== "") {
          onSubmit(cleanedValue);
        }
        e.target.message.value = "";
      }}
    >
      <Input name="message" placeholder={placeholder} />
      <Button type="submit">{buttonText}</Button>
    </Form>
  );
}
