import React from "react";
// import { persistor } from "../app/store";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { orderStaffListArrFromCurrentMonth } from "../features/utils";
import {
  resetState,
  selectActiveStaffIds,
  selectStaffOrderedByMob,
} from "../features/staff/staffSlice";
import BirthdayMonth from "./BirthdayMonth";

import styles from "../styles/App.module.css";

export function BirthdayList(): React.ReactElement {
  const dispatch = useAppDispatch();
  const activeStaffIds = useAppSelector(selectActiveStaffIds);
  const staffOrderedByMob = useAppSelector(selectStaffOrderedByMob);
  const staffOrderedByMobFromCurrent =
    orderStaffListArrFromCurrentMonth(staffOrderedByMob);

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
          <button
            className={styles.clearButton}
            onClick={() => dispatch(resetState("ResetActive"))}
          >
            Clear all
          </button>
        </ul>
      ) : (
        <p className={styles.infoTitle}>Employees List is empty</p>
      )}
    </div>
  );
}

export default BirthdayList;
