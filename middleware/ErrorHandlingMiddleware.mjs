export default function (err,req,res,next){
    res.status(505).json({messge: err.message});
}