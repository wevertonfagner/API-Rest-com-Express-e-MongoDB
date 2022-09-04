import mongoose from "mongoose"

mongoose.connect("mongodb+srv://wevertongomes:123@cluster0.izmf1he.mongodb.net/node-API")

let db = mongoose.connection;

export default db;