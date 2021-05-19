import React, { useEffect } from "react";
import Employee from "./Employee";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { getStaffAsync, selectAllStaff } from "../features/staff/staffSlice";

import styles from "../styles/App.module.css";

export function EmployeeList(): React.ReactElement {
  const dispatch = useAppDispatch();
  const staff = useAppSelector(selectAllStaff);

  useEffect(() => {
    dispatch(getStaffAsync());
  }, []);

  const abc: string[] = [];
  for (let i = 0; i < 26; i++) {
    abc.push(String.fromCharCode("A".charCodeAt(0) + i));
  }

  return (
    <div className={styles.employeeListContanier}>
      <p className={styles.listTitle}>Employees</p>
      <hr></hr>
      {staff.length ? (
        <ul className={styles.employeeList}>
          {abc.map((letter, index) => {
            const filteredStaff = staff.filter(
              (employee) => employee.lastName[0].toUpperCase() === letter
            );
            if (filteredStaff.length)
              return (
                <li key={letter}>
                  <p className={styles.letterTitle}>{letter}</p>
                  {filteredStaff.map((employee) => (
                    <Employee
                      key={employee.id}
                      firstName={employee.firstName}
                      lastName={employee.lastName}
                      id={employee.id}
                    />
                  ))}
                </li>
              );
            else
              return (
                <li key={letter}>
                  <p className={styles.letterTitle}>{letter}</p>
                  <p className={styles.fullName}>---</p>
                </li>
              );
          })}
        </ul>
      ) : (
        <p>Loading employee data...</p>
      )}
    </div>
  );
}

export default EmployeeList;
