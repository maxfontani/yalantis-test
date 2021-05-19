import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import {
  addActiveEmployee,
  removeActiveEmployee,
} from "../features/staff/staffSlice";
import styles from "../styles/App.module.css";

export function Employee(props: {
  firstName: string;
  lastName: string;
  id: string;
}): React.ReactElement {
  const { firstName, lastName, id } = props;
  const [isActive, setIsActive] = useState(false);
  const fullName: string = lastName.concat(" ", firstName);
  const dispatch = useAppDispatch();

  function handleRadioChange(target: EventTarget & HTMLInputElement) {
    if (target.value === "false") {
      setIsActive(false);
      dispatch(removeActiveEmployee(target.id));
    } else {
      setIsActive(true);
      dispatch(addActiveEmployee(target.id));
    }
  }
  return (
    <div
      className={
        isActive
          ? styles.employee + " " + styles.employeeActive
          : styles.employee
      }
    >
      <p className={styles.fullName}>{fullName}</p>
      <div className="radioButton">
        <input
          type="radio"
          id={id}
          name={fullName}
          value="false"
          onChange={(e) => handleRadioChange(e.target)}
          checked={!isActive}
        />
        <label htmlFor="notActiveRadio">not active</label>
      </div>
      <div className="radioButton">
        <input
          type="radio"
          id={id}
          name={fullName}
          value="true"
          onChange={(e) => handleRadioChange(e.target)}
        />
        <label htmlFor="activeRadio">active</label>
      </div>
    </div>
  );
}

export default Employee;
