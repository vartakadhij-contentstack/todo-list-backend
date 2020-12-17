const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env"});
const taskRouter = require("./routes/todoRoutes");
const app = express();

app.use(express.json());
app.use("/todolist",taskRouter);

app.listen(process.env.PORT, console.log(`Server started on port ${process.env.PORT}`));

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology: true},
     (err,connection)=> {
    if(err){
        console.log(err);
        return console.log("Error in connecting to database");
    }
    // console.log(connection);
    console.log("Successfully connected to database");
})