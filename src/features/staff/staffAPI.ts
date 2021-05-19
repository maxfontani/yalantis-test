import axios from "axios";

export function fetchStaff() {
  // Make a request for a user with a given ID
  return axios
    .get("https://yalantis-react-school-api.yalantis.com/api/task0/users")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      // handle error
      alert("Oops, something went wrong...");
      console.log("ERROR", err);
      return err;
    });
}
