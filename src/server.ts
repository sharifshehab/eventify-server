import app from "./app";
import { Server } from "http";
import mongoose from "mongoose";
import config from "./config";

let server: Server;
const port = process.env.PORT || 5000;

async function main() {
  try {
        // Connect to MongoDB Atlas using Mongoose
    const uri = `mongodb+srv://${config.db_user}:${config.db_pass}@cluster0.rdxg6.mongodb.net/eventifyDB?retryWrites=true&w=majority&appName=Cluster0`;
        await mongoose.connect(uri);
        console.log('Connected to MongoDB Atlas Using Mongoose');

      const server = app.listen(port, () => {
        console.log(`Eventify Server Running on port ${port}`);
      });

    } catch (error) {
      console.error('Error:', error);
    }
  }
main();
