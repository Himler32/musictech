const mongoose = require("mongoose");

module.exports = () => {
   mongoose.connect("mongodb://localhost:27017/TechMusic", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   });
};

const db = mongoose.connection;
db.on("open", () => {
   console.log("MONGODB ISHGA TUSHDI")
});
db.on('error', ()=>{
    console.log(err)
})
