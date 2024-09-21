import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO!, { dbName: "Skicom" });
    // eslint-disable-next-line no-console
    console.log(`server listening`);
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error(error.message);
    }
  }
};
