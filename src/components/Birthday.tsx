import React from "react";
import { format, parseJSON } from "date-fns";
import { IEmployee } from "../app/types";
import styles from "../styles/App.module.css";

export function Birthday(props: { employee: IEmployee }): React.ReactElement {
  const { employee } = props;
  const fullName: string = employee.lastName.concat(" ", employee.firstName);

  return (
    <li className={styles.birthday}>
      {fullName}&nbsp;-&nbsp;{format(parseJSON(employee.dob), "dd MMMM, yyyy")}
      &nbsp;year
    </li>
  );
}

export default Birthday;
