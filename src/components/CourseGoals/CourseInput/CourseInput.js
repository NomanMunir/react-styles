import React, { useState } from "react";

import styles from "./CourseInput.module.css";
import Button from "../../UI/Button/Button";
// const FormControl = styled.div`
//    {
//     margin: 0.5rem 0;
//   }

//   & label {
//     font-weight: bold;
//     color:${(props) => (props.inValid ? "red" : "#333")};
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.inValid ? "red" : "#333")};
//     background: ${(props) =>
//       props.inValid ? "rgb(231, 189, 189);" : "transparent"};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;
const CourseInput = (props) => {
  const [isValid, setIsVaild] = useState(true);
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    if (enteredValue.trim("").length > 0) {
      setIsVaild(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim("").length === 0) {
      setIsVaild(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["form-control"]} ${!isValid && styles.inValid}`}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
