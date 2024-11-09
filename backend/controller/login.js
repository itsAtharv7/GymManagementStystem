import bcrypt from "bcrypt";
import User from "../models/user.js";

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Respond with the user details (you can add token logic here if necessary)
    res.status(200).json({ msg: "Login successful", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};
export default login;
