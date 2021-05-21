import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import App from "./App";

test("renders Employees and Birthdays blocks", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText("Employees")).toBeInTheDocument();
  expect(getByText("Employees' Birthdays")).toBeInTheDocument();
});
