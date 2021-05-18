import React from 'react'
import BirthdayList from '../components/BirthdayList'
import EmployeeList from '../components/EmployeeList'
import styles from '../styles/App.module.css'

function App() {
  return (
    <div className={styles.app}>
        <EmployeeList />
        <BirthdayList />
    </div>
  );
}

export default App;
