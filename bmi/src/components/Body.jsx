import React, { useState } from "react";
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

const FieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FieldGroup = styled.div`
  flex: 1;
  margin: 0 10px;
`;

const Label = styled.label`
  font-size: 1.25rem;
  color: ${({ $hasError }) => ($hasError ? "red" : "#333")};
  margin-bottom: 10px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: ${({ $hasError }) =>
    $hasError ? "2px solid red" : "2px solid #ddd"};
  background-color: transparent;
  font-size: 1rem;
  color: ${({ $hasError }) => ($hasError ? "red" : "#333")};
  outline: none;
  margin-bottom: 20px;

  &::placeholder {
    color: ${({ $hasError }) => ($hasError ? "red" : "#999")};
  }

  &:focus {
    border-bottom-color: ${({ $hasError }) => ($hasError ? "red" : "#333")};
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const BMIResult = styled.div`
  background-color: #e0f7fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #007bff;
  border-radius: 6px;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
  width: 100%;
  text-align: center;
`;

const Category = styled.div`
  background-color: #708090;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  border-radius: 6px;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
  width: 100%;
  text-align: center;
`;

const Body = ({ gender,age,submitted, setSubmitted}) => {
  const [localAge, setLocalAge] = useState("");
  const [localGender, setlocalGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);


  const heightNotValid = submitted && height === "";
  const weightNotValid = submitted && weight === "";

  const heightChange = (event) => {
    setHeight(event.target.value);
  };

  const weightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleClick = () => {
    setSubmitted(true);
    if (weight && height && age && gender) {
      const heightInMeters = parseFloat(height);
      const weightInKg = parseFloat(weight);
      const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
      setBMI(calculatedBMI.toFixed(1));
      setLocalAge(age); // Set the local age here'
      setlocalGender(gender); // Set the local gender here
      setSubmitted(false);
    }
  };

  let value = <div>0.00</div>;

  if (bmi && localAge && localGender) {
    if (bmi < 18.5) {   
      value = (
        <>
        <BMIResult>your bmi : {bmi}</BMIResult>
          <Category><div>Underweight</div>
           <div>age : {localAge}</div> 
            <div>gender : {localGender}</div>
          </Category>
        </>
      );
    } else if (18.5 <= bmi && bmi < 24.9) {
      value = (
        <>
        <BMIResult>your bmi : {bmi}</BMIResult>
          <Category><div>Normalweight</div>
           <div>age : {localAge}</div> 
            <div>gender : {localGender}</div>
          </Category>
        </>
      );
    } else if (25 <= bmi && bmi < 29.9) {
      value = (
        <>
        <BMIResult>your bmi : {bmi}</BMIResult>
          <Category><div>Overweight</div>
           <div>age : {localAge}</div> 
            <div>gender : {localGender}</div>
          </Category>
        </>
      );
    } else {
      value = (
        <>
        <BMIResult>your bmi : {bmi}</BMIResult>
          <Category><div>Obesity</div>
           <div>age : {localAge}</div> 
            <div>gender : {localGender}</div>
          </Category>
        </>
      );
    }
  }

  return (
    <OuterDiv>
      <InnerDiv>
        <FieldsContainer>
          <FieldGroup>
            <Label $hasError={heightNotValid}>Height (m)</Label>
            <Input
              $hasError={heightNotValid}
              onChange={heightChange}
              type="number"
              placeholder="Height"
              value={height}
            />
          </FieldGroup>
          <FieldGroup>
            <Label $hasError={weightNotValid}>Weight (kg)</Label>
            <Input
              $hasError={weightNotValid}
              onChange={weightChange}
              type="number"
              placeholder="Weight"
              value={weight}
            />
          </FieldGroup>
        </FieldsContainer>
        <Button onClick={handleClick}>Calculate BMI</Button>
        <BMIResult>{value}</BMIResult>
      </InnerDiv>
    </OuterDiv>
  );
};  

export default Body;
