import React from "react";
import { getMonth, parseJSON } from "date-fns";
import { sortByLastName } from "../features/utils";
import { TEmployeeList } from "../app/types";
import Birthday from "./Birthday";

import styles from "../styles/App.module.css";
import Employee from "./Employee";

export function BirthdayMonth(props: {
  month: number;
  staff: TEmployeeList;
}): React.ReactElement {
  const { month, staff } = props;
  const sortedStaff = sortByLastName(staff);
  const displayMonth = getMonth(parseJSON(staff[0].dob));
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
    <li key={month} className={styles.birthdayMonth}>
      <p className={styles.letterTitle}>{monthNames[displayMonth]}</p>
      <ul>
        {sortedStaff.map((employee) => (
          <Birthday key={employee.id} employee={employee} />
        ))}
      </ul>
    </li>
  );
}

export default BirthdayMonth;
