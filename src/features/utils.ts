import { getMonth } from "date-fns";
import { IEmployee, TEmployeeList } from "../app/types";

export function sortByLastName(list: TEmployeeList): TEmployeeList {
  list.sort((a: IEmployee, b: IEmployee) => {
    var nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
    var nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // if names are equal
    return 0;
  });
  return list;
}

export function sortStaffListArrByCurrentMonth(
  list: TEmployeeList[]
): TEmployeeList[] {
  const currentMonth = getMonth(new Date());
  if (currentMonth === 0) return list;
  const preMonths: TEmployeeList[] = list.slice(0, currentMonth);
  const postMonths: TEmployeeList[] = list.slice(currentMonth);
  return postMonths.concat(preMonths);
}
