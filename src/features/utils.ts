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
