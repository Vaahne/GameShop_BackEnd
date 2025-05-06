export default function globalError(err,req,res,next){
    res.status(505).json({messge: err.message});
}