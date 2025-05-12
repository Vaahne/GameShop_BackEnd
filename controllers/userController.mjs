import User from '../models/userSchema.mjs';
import Cart from '../models/cartSchema.mjs';
import bcrypt from 'bcrypt';

function getUsers(req,res){

}

function deleteUser(req,res){

}
function updateUser(req,res){

}
async function createUser(req,res){
    // destructure 
    const {email,username , password} = req.body;
    // check user submitted all data
    if(!username || !password || !email)
        return res.status(400).json({message: `All feilds are requried`});
    
    let user = await User.findOne({email});
    console.log("test");

    if(user)
        return res.status(400).json({msg: `Email already exists!!!`});
    
    user = new User({username , email, password});
    await user.save();

    const cart = new Cart({user: user._id,items: []});

    await cart.save();
    //  update user with car id reference
    user.cart = cart._id;
    await user.save();

    res.status(201).json({userId : user._id, cartId : cart._id});
}

    // Post login route
    async function login(req,res){
        // get email and password 
        const {email,password} = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // data validation 
            // respond with error if fails
        if(!emailRegex.test(email))
            return res.status(400).json({message: `Invaid Email`});
        if(!password)
            return res.status(400).json({message: `Password cannot be empty` });

        //  check if user exists in DB
        let user = await User.findOne({email});
        // respond with an eror msg
        if(!user)
            return res.status(404).json({message: 'Invalid Credentials'});
        // check if user password matches body password
        // respond with error if doesnt match
        let isMatch =await bcrypt.compare(password,user.password)
        if(isMatch)
            return res.status(400).json({message: 'Invalid Credentials'});

        // res with userId
        res.status(200).json({userId: user._id,cart: cart});
    }

export default {createUser,getUsers,updateUser,deleteUser,login};