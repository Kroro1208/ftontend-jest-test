import axios from "axios"; // npm install axios

export class Users {
  static async all() {
    const res = await axios.get("/users.json");
    return res.data;
  }
}
