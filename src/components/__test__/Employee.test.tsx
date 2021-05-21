import { Provider } from "react-redux";
import { store } from "../../app/store";
import { render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import Employee from "../Employee";

const props = {
  firstName: "Roxanne",
  lastName: "Salas",
  id: "5e00928dea77bb8b9a15bdc2",
};

describe("Employee", () => {
  test("renders two radio buttons", () => {
    render(
      <Provider store={store}>
        <Employee {...props} />
      </Provider>
    );
    expect(screen.getAllByRole("radio")).toHaveLength(2);
  });

  test("radio checked by default is the not active one", () => {
    render(
      <Provider store={store}>
        <Employee {...props} />
      </Provider>
    );
    expect(screen.getByTitle("not-active-radio")).toBeChecked();
  });

  test("active radio button adds ID to the state", () => {
    // const handleRadioChange = jest.fn();
    render(
      <Provider store={store}>
        <Employee {...props} />
      </Provider>
    );
    fireEvent.click(screen.getByTitle("active-radio"));
    expect(screen.getByTitle("active-radio")).toBeChecked();
    expect(store.getState().staff.activeStaffIds).toContain(props.id);
  });
});
