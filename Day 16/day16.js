const mongoose = require("mongoose");

function connectToMongoDB() {
  const mongoDBURI = "mongodb+srv://avinash03082003:Js2pNrznztrl0Kvy@projectfrt.ppn0dmb.mongodb.net/ProjectFRT?retryWrites=true&w=majority";

  mongoose.connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "MongoDB connection error:"));

  db.once("open", () => {
    console.log("\nSuccessfully connected to MongoDB");
  });
}

connectToMongoDB();