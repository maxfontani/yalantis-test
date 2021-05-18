import React, { useState } from "react";
import styles from "../styles/App.module.css";

export function Birthday(props: {
  firstName: string;
  lastName: string;
}): React.ReactElement {
  const { firstName, lastName } = props;
  const [active, setActive] = useState(false);
  const fullName: string = lastName.concat(" ", firstName);


  return (
    <div className={active ? styles.employee + " " + styles.employeeActive : styles.employee}>
    </div>
  );
}

export default Birthday;
