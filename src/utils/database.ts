import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB is connected")
    return
  }

  try {
    await mongoose.connect(process.env.DB_URI!, {
        dbName: "ilaro_db"        
    })
  } catch(error) {
    console.log({error})
  }
};
