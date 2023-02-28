import mongoose from "mongoose";
import dotenv from "dotenv";
//import passportLocalMongoose from "passport-local-mongoose"
dotenv.config();

const classSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    classroom_name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
<<<<<<< HEAD
    aula: {
      type: String,
      required: false,
    },
=======
>>>>>>> 327078374f4899d58c8dfbefee3b4b88897c2c48
    users: [
      {
        type: String,
        required: false,
      },
    ],
    other: [
      {
<<<<<<< HEAD
        user: String,
        message: {
=======
        user:String,
        message: {
          
>>>>>>> 327078374f4899d58c8dfbefee3b4b88897c2c48
          type: String,
          required: false,
        },
        time: { type: Date, default: Date.now, required: false },
      },
    ],
  },
  { timestamps: true }
);

//classSchema.plugin(passportLocalMongoose)
export default mongoose.model("classSchema", classSchema);
