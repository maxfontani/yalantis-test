import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectActiveStaffIds, selectStaffOrderedByMob } from "../features/staff/staffSlice";
import BirthdayMonth from "./BirthdayMonth";

import styles from "../styles/App.module.css";

export function BirthdayList(): React.ReactElement {
  const activeStaffIds = useAppSelector(selectActiveStaffIds);
  const staffOrderedByMob = useAppSelector(selectStaffOrderedByMob);

  return (
    <div className={styles.birthdayList}>
      <p className={styles.listTitle}>Employees' Birthdays</p>
      {activeStaffIds.length ? (
        <ul>
          <li>
          {staffOrderedByMob.map((staffArr, index) => (
            staffArr.length ? 
            <BirthdayMonth key={index} month={index} staff={staffArr} />
            : null
          ))}
          </li>
        </ul>
      ) : (
        <p>Employees List is empty</p>
      )}
    </div>
  );
}

export default BirthdayList;
