import 'dotenv/config';
import {Sequelize} from "sequelize"
const DATABASE_URL = process.env.DATABASE_URL || "no database url";
console.log(DATABASE_URL);
const sequelize = new Sequelize(DATABASE_URL);
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}