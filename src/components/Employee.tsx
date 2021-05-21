import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addActiveEmployee,
  removeActiveEmployee,
  selectActiveStaffIds,
} from "../features/staff/staffSlice";
import styles from "../styles/App.module.css";

export function Employee(props: {
  firstName: string;
  lastName: string;
  id: string;
}): React.ReactElement {
  const { firstName, lastName, id } = props;
  const fullName: string = lastName.concat(" ", firstName);
  const dispatch = useAppDispatch();
  const activeStaffIds = useAppSelector(selectActiveStaffIds);
  const isActive: boolean = activeStaffIds.includes(id);

  function handleRadioChange(
    target: EventTarget & HTMLInputElement,
    id: string
  ) {
    target.value === "false"
      ? dispatch(removeActiveEmployee(id))
      : dispatch(addActiveEmployee(id));
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
          title="not-active-radio"
          id={id}
          name={fullName}
          value="false"
          onChange={(e) => handleRadioChange(e.target, id)}
          checked={!isActive}
        />
        <label htmlFor={id}>not active</label>
      </div>
      <div className="radioButton">
        <input
          type="radio"
          title="active-radio"
          id={id + "active"}
          name={fullName}
          value="true"
          onChange={(e) => handleRadioChange(e.target, id)}
          checked={isActive}
        />
        <label htmlFor={id + "active"}>active</label>
      </div>
    </div>
  );
}

export default Employee;
