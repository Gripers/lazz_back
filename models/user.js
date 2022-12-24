const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    id:{
      type: Number,
      require: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    count: {
      type: Number,
      required: false,
      default: 1,
    },
    desc: {
      type: String,
      required: true,
      trim:true,
    }
  },
  { timestamps: true }
); //qacon sozdat qilinga date ni korsatadi

module.exports = mongoose.model("User", userSchema);