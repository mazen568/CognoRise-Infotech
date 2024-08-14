import React from "react";
import styled from "styled-components";

const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const InnerDiv = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1.25rem;
  color: ${({ $hasError }) => ($hasError ? "red" : "#333")};
  margin-bottom: 10px;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const RadioLabel = styled.label`
  font-size: 1rem;
  color: ${({ $hasError }) => ($hasError ? "red" : "#555")};
  margin-right: 15px;
  display: flex;
  align-items: center;

  input {
    margin-right: 8px; /* Space between radio button and label */
  }
`;

const Gender = ({ gender, setGender, hasError }) => {
  function handleChange(event) {
    setGender(event.target.value);
  }

  return (
    <OuterDiv>
      <InnerDiv>
        <Label $hasError={hasError}>Gender</Label>
        <RadioGroup>
          <RadioLabel $hasError={hasError}>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={handleChange}
            /> Male
          </RadioLabel>
          <RadioLabel $hasError={hasError}>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={handleChange}
            /> Female
          </RadioLabel>
        </RadioGroup>
      </InnerDiv>
    </OuterDiv>
  );
};

export default Gender;
