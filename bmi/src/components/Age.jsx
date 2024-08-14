import React from "react";
import styled from "styled-components";

const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -8px; /* Reduced margin for a cleaner look */
`;

const InnerDiv = styled.div`
  background-color: #f9f9f9; /* Light background for contrast */
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
  color: ${({ $invalid }) => ($invalid ? "red" : "#333")};
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0px;
  font-size: 1rem;
  color: ${({ $invalid }) => ($invalid ? "red" : "#333")};
  background-color: transparent;
  border-bottom: ${({ $invalid }) =>
    $invalid ? "2px solid red" : "2px solid #ddd"};
  outline: none;

  &:focus {
    border-bottom-color: ${({ $invalid }) => ($invalid ? "red" : "#333")};
  }

  &::placeholder {
    color: ${({ $invalid }) => ($invalid ? "red" : "#999")};
  }
`;

const Age = ({ age, setAge, invalid}) => {
 

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <OuterDiv>
      <InnerDiv>
        <Label $invalid={invalid}>Age</Label>
        <Input
          $invalid={invalid}
          type="text"
          value={age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
      </InnerDiv>
    </OuterDiv>
  );
};

export default Age;
