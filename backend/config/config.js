import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://rohitdhawadkar:Csa8mwQEETc1LVZt@cluster0.h3rlg.mongodb.net/",
    );
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error);
  }
};

export default ConnectDB;
