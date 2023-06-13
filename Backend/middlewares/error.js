exports.errorHandle=(err,req,res,next)=>{
    err.statusCode = err.statusCode || 500
    err.message =err.message || "Internal server"
    
    if (err.name==="CastError") {
        err.message=`Invalid ${err.path}`
        err.statusCode=400
    }
    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}
exports.asyncError=(passFunc)=>(req,res,next)=>
    Promise.resolve(passFunc(req,res,next)).catch(next)
