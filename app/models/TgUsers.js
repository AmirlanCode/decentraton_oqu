import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const tgUsersSchema = new Schema(
  {
    telegram_id: Number,
    telegram_name: String,
    points: Number,
    date: Date.now(),
  },
  
);

const TgUsers = mongoose.models.TgUsers || mongoose.model("TgUsers", tgUsersSchema);

export default TgUsers;