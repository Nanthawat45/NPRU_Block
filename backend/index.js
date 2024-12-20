const express = require("express")
const cors = require("cors")
require("dotenv").config();
const mongoose = require("mongoose")
const userRouter = require("./routers/user.router");
const postRouter = require("./routers/Post.router");

const app = express();
const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

//Connect to Mongo DB
// try{
//     await mongoose.connect(DB_URL);
//     console.log("Connect to Mongo DB Successfully");
// }catch (error) {
//     console.log("DB Connection Failde");   
// }
const connectDB = async () => {
    try {
      await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log("Connected to MongoDB successfully");
    } catch (error) {
      console.error("DB Connection Failed:", error);
      process.exit(1); // ออกจากโปรแกรมหากเชื่อมต่อล้มเหลว
    }
  };
  connectDB();

app.use(cors({origin: BASE_URL, credentials: true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to SE NPRU Blog REstful API</h1>")
});

 
app.use()

//use Router
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/post", postRouter);

app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:"+ PORT);
});