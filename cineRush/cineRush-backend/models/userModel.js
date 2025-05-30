import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    chatIds: {
      type: Array,
      required: false,
      default: [],
    },
  },
  { minimize: false }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
