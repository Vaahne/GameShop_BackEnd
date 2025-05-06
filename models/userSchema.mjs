import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: { type: String, required: true},
    email: {type:String, unique: true,required: true,match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email address must be valid !",
      ]},
    password: {type: String,required: true,minLength : 8},
    admin: {type: Boolean,default:false},
    cart: {type: mongoose.Schema.Types.ObjectId,ref: "Cart"}

});

export default mongoose.model("User",userSchema);