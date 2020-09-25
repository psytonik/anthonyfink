exports.checkJWT = (req,res,next) => {
    const isValidToken = true;
    if(isValidToken){
        next()
    }else{
        res.status(401).send({title:'Not Authorized',detail:'Please Log In'})
    }
}
