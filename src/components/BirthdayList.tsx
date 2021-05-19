import React from "react";
import { useAppSelector } from "../app/hooks";
import { sortStaffListArrByCurrentMonth } from "../features/utils";
import {
  selectActiveStaffIds,
  selectStaffOrderedByMob,
} from "../features/staff/staffSlice";
import BirthdayMonth from "./BirthdayMonth";

import styles from "../styles/App.module.css";

export function BirthdayList(): React.ReactElement {
  const activeStaffIds = useAppSelector(selectActiveStaffIds);
  const staffOrderedByMob = useAppSelector(selectStaffOrderedByMob);
  const staffOrderedByMobFromCurrent =
    sortStaffListArrByCurrentMonth(staffOrderedByMob);

  return (
    <div className={styles.birthdayListContanier}>
      <p className={styles.listTitle}>Employees' Birthdays</p>
      <hr></hr>
      {activeStaffIds.length ? (
        <ul className={styles.birthdayMonthList}>
          {staffOrderedByMobFromCurrent.map((staffArr, index) =>
            staffArr.length ? (
              <BirthdayMonth key={index} month={index} staff={staffArr} />
            ) : null
          )}
        </ul>
      ) : (
        <p className={styles.infoTitle}>Employees List is empty</p>
      )}
    </div>
  );
}

export default BirthdayList;
