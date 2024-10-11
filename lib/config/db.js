import mongoose from "mongoose";

export const ConnectDB=async ()=>{
  // await mongoose.connect("mongodb+srv://chaudharykumar228:passwordyoho3@cluster0.55ptl.mongodb.net/blog-app?retryWrites=true&w=majority")
  await mongoose.connect("mongodb://localhost:27017/blog-app");
  console.log("DB Connected");
}
