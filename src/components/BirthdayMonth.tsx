import React from "react";
import { TEmployeeList } from "../app/types";

import styles from "../styles/App.module.css";

export function BirthdayMonth(props: { month: number; staff: TEmployeeList }): React.ReactElement {
  const { month, staff } = props;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className={styles.monthActive}>
      <p className={styles.listTitle}>{monthNames[month]}</p>
        <ul>
          {staff.map((employee) => (
            <li>{employee.lastName}</li>
          ))}
        </ul>
    </div>
  );
}

export default BirthdayMonth;
