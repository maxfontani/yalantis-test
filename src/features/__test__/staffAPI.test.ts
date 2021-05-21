import { fetchStaff } from "../staff/staffAPI";

test("API provides the correct data format", () => {
  expect.assertions(4);
  return fetchStaff().then((data) => {
    expect(data[0]).toHaveProperty("id");
    expect(data[0]).toHaveProperty("firstName");
    expect(data[0]).toHaveProperty("lastName");
    expect(data[0]).toHaveProperty("dob");
  });
});
