import {configDotenv} from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";
configDotenv();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("App is listening [index.js]");
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed [index.js]", err);
  })
  .finally(() => {
    console.log("Conection ended");
  });

//first simple approach
/*
import express from "express";
const app = express();


(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    app.on("Error", (e) => {
      console.log("Error from express connection", e);
    });
    app.listen(process.env.PORT, () => {
      console.log("App is listening");
    });
  } catch (error) {
    console.error("ERROR :", error);
    throw error;
  }
})();
console.log(process.env.PORT || 6000);
*/
