const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ConnectionStr = require("./util/db");
const Product = require("./util/model");

const app = express();
app.use(cors());

//                                    Get Method

// async function Getdata() {
//   await mongoose.connect(ConnectionStr);
//   const data = await Product.find({ model: "2016" });
//   console.log(data);
// }

// Getdata();

//                              Insert method & Update Method

// async function Insertdata() {
//   await mongoose.connect(ConnectionStr);
//Insertone
//   let data = await Product.updateOne({ name: "IIIII" }, {$set:{color: "black" }});
//   //   if(!data){
//   //     console.error("data not added")
//   //   }
//   //   else{
//   //     console.log("data added")
//   //   }
//   console.log("data>>", data);
// }

// Insertdata();

//                                    delete method

// async function DeleteMethod() {
//   await mongoose.connect(ConnectionStr);
//   const data = await Product.deleteOne({ name: "IIIII" });
//   console.log("data>>", data);
// }
// DeleteMethod();

//get api

app.get("/getmethod", async (req, resp) => {
  await mongoose.connect(ConnectionStr);
  const data = await Product.find();
  resp.send(data);
});

app.use(express.json());
app.post("/postmethod", async (req, resp) => {
  const data = req.body;
  await mongoose.connect(ConnectionStr);
  const result = await Product.insertMany(data);
  resp.send(result);
});

app.get("/", (req, resp) => {
  resp.send(" Home Page");
});

app.get("*", (req, resp) => {
  resp.send("404 Error");
});


app.listen(4500);
