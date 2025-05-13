    //  after we recieve the req befeore we response
    //  declared as a function
    //  req,res,next
    // token will be in req.header
    // conditions
    // job for middleware
    //  get user toekn form middleware (if there is any)
    //  try
    //  if user token exists & proper token
    //  take token and save into req.user
    // next
    //  else token is not there/null
    // res with token invalid
    
    //  create read route
    //  take token from req.user
    //  use it to user data to front end (without password)


function userAuthentication(req,res,next){
    try{
        const token = req.header('token');
        if(!token)
            return res.status(404).json('Invalid token');
        if(token.length !== 24)
            throw Error('Invalid Token')
        req.user = token;
        next();
    }catch(err){
        console.error(err.message);
        return res.status(404).json({msg: 'Invalid token'});
    }
    
}

export default userAuthentication;