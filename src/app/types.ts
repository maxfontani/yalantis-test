export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
}

export type TEmployeeList = IEmployee[];

export interface IStaffState {
  allStaff: TEmployeeList;
  activeStaffIds: string[];
  status: "idle" | "loading" | "failed";
}
