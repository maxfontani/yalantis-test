import { sortByLastName, orderStaffListArrFromCurrentMonth } from "../utils";
import { TEmployeeList, IStaffState } from "../../app/types";
import staffReducer, {
  selectStaffOrderedByMob,
  addActiveEmployee,
} from "../staff/staffSlice";

const mockList: TEmployeeList = [
  {
    id: "5e00928df892b0c84c82db9d",
    firstName: "Dorsey",
    lastName: "Meadows",
    dob: "2019-09-19T09:34:32.083Z",
  },
  {
    id: "5e00928dea77bb8b9a15bdc2",
    firstName: "Roxanne",
    lastName: "Salas",
    dob: "2019-07-13T07:19:20.718Z",
  },
  {
    id: "5e00928d91e7feaa9872ec08",
    firstName: "Yang",
    lastName: "Carson",
    dob: "2019-02-26T16:52:36.244Z",
  },
];

describe("utils", () => {
  test("sorts by last name", () => {
    const sortedList = sortByLastName(mockList);
    expect(
      sortedList[0].lastName[0].toUpperCase() < sortedList[1].lastName[1]
    ).toEqual(true);
    expect(
      sortedList[1].lastName[1].toUpperCase() < sortedList[2].lastName[2]
    ).toEqual(true);
  });
});
