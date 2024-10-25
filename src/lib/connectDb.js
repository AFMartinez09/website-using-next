const { default: mongoose } = require("mongoose");

const connection = {};

export const connectDb = async () => {
  try {
    if(connection.isConnected){
      console.log("Using existing connection");
      return;
    }
    return db = await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error(error);
  }
}