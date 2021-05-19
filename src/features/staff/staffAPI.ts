import axios from "axios";

export function fetchStaff() {
  return axios
    .get("https://yalantis-react-school-api.yalantis.com/api/task0/users")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      alert("Oops, something went wrong...");
      console.log("ERROR", err);
      return err;
    });
}
