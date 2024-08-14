import React, { useState } from "react";
import styled from "styled-components";
import Age from "./components/Age";
import Gender from "./components/Gender";
import Body from "./components/Body";

const Header = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

const BMICalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  min-height: 70vh;
  padding: 40px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: 0 auto;
  border-radius: 12px;
`;

const BMICalculator = () => {
  const [age, setAge] = useState("");

  const [submitted, setSubmitted] = useState(false);


  const [gender,setGender]=useState("");


  const invalid = submitted && age === "";
  const hasError=submitted && gender === "";

  

  return (
    <div className="mt-2">
      <BMICalculatorContainer>
        <Header>BMI Calculator</Header>
        <Age
          age={age}
          setAge={setAge}
          invalid={invalid}
        />
        <Gender hasError={hasError} gender={gender} setGender={setGender}/>
        <Body gender={gender} age={age} submitted={submitted} setSubmitted={setSubmitted} />
      </BMICalculatorContainer>
    </div>
  );
};

export default BMICalculator;
