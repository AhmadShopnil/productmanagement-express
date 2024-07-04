/* eslint-disable no-console */
import mongoose from 'mongoose';
import app from './app';
import config from './config';
const port = 5000;

async function main() {
  try {
    // connection to mongodb
    await mongoose.connect(config.database_url as string);

    // end connection

    app.listen(port, () => {
      console.log(`Server is Running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
