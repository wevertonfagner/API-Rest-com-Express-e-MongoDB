import mongoose from "mongoose"

mongoose.connect("<URI do MongoDB>")

let db = mongoose.connection;

export default db;
