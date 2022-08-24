import axios from "axios";

class ClassServices {
  static async getAllClass() {
    try {
      const response = await axios.get("localhost:3030/class/all");
    } catch (e) {
      console.log("Error ", e);
    }
  }
}
export default ClassServices;
