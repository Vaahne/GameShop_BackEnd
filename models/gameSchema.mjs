import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
   title: {type:String , required: true},
   price: {type:Number,required:true},
   category: {type:String, required: true,enum: ['Board','Dice','Outdoor','video','other']},
   noOfPlayers : {type:Number,required: true},
   description : {type:String,required: true},
   quantity: {type: Number , required: true} 
});

export default mongoose.model("Game",gameSchema);