const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const AddtoCartModel = require("./AddtoSchema");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/AddtoCart");
app.post("/AddtoCart", (req, res) => {
  body = req.body;
  AddtoCartModel.create({
    productName: body.productName,
    productUrl: body.productUrl,
    productPrice: body.productPrice,
  })
    .then((res) => res.json(res))

    .catch((err) => console.log(err));
});

app.get("/AddtoCart", async (req, res) => {
  AddtoCartModel.find();
  if (AddtoCartModel.length > 0) {
    res.send(AddtoCartModel);
  } else {
    res.send({ result: "No product found" });
  }
});
// app.delete("/remove/:id",(req,res)=>{
// const id=req.params.id;
// AddtoCartModel.findByANDDelete({_id:id})
// .then((addtocart)=>res.json(addtocart))
// .catch((todo)=>res.json(err))
// })

app.listen(4000, () => {
  console.log("server is runing");
});
