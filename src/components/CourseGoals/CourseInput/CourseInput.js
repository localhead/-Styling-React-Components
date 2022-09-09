import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styled from "styled-components";
import "./CourseInput.css";

/* Creating styled component for div. We place it to where div was */
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    /* here we take invalid prop and change styles depending on its value */
    background: ${(props) => (props.invalid ? "#ff8a8a" : "transparent")};
    border: ${(props) => (props.invalid ? "2px" : "1px")} solid
      ${(props) => (props.invalid ? "red" : "black")};
  }

  & input:focus {
    outline: none;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {
  const [isValid, setIsValid] = useState(true);

  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Form control is custom styled component. we put invalid the in order to change styles depending on its value */}
      <FormControl invalid={!isValid}>
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
