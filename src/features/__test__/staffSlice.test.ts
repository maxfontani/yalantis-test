import { IStaffState } from "../../app/types";
import staffReducer, {
  addActiveEmployee,
  removeActiveEmployee,
} from "../staff/staffSlice";

const mockUser = {
  id: "5e00928df5f0885286893b58",
  firstName: "Aguirre",
  lastName: "Christian",
  dob: "2019-09-27T04:38:44.400Z",
};

const initialState: IStaffState = {
  allStaff: [],
  activeStaffIds: [],
  status: "idle",
};

const updatedState: IStaffState = {
  allStaff: [],
  activeStaffIds: [mockUser.id],
  status: "idle",
};

describe("staff reducer", () => {
  test("returns the initial state", () => {
    expect(staffReducer(undefined, { type: "" })).toEqual(initialState);
  });

  test("adds active ids", () => {
    expect(
      staffReducer(initialState, {
        type: addActiveEmployee,
        payload: mockUser.id,
      })
    ).toEqual(updatedState);
  });

  test("removes active ids", () => {
    staffReducer(initialState, {
      type: addActiveEmployee,
      payload: mockUser.id,
    });

    expect(
      staffReducer(initialState, {
        type: removeActiveEmployee,
        payload: mockUser.id,
      })
    ).toEqual(initialState);
  });

  test("addActiveEmployee handles undefined values", () => {
    expect(
      staffReducer(initialState, {
        type: addActiveEmployee,
        payload: undefined,
      })
    ).toEqual(initialState);
  });

  test("removeActiveEmployee handles undefined values", () => {
    expect(
      staffReducer(updatedState, {
        type: removeActiveEmployee,
        payload: undefined,
      })
    ).toEqual(updatedState);
  });
});
