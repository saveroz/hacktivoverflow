function errorHandler (err, req, res, next) {
    // console.log("masuk ke error handler");
    // console.log(err.message)
    // console.log("setelah error message")
    if (err.message=='email/password not found'){
      console.log("masuk ke email error")
      res.status(404).json({
        message : err.message
      })
    }
    else if(err.name=='JsonWebTokenError'){
      console.log("masuk ke json error")
      res.status(401).json({
        message : "invalid token"
      })
    }
    else if(err.name=="ValidationError"){
      // console.log("masuk ke validation error")
      // console.log(err.message, "validation error")
      res.status(400).json({
        message :err.message
      })
    }
    else {
      res.status(err.code || 500).json({
        message : err.message
      })
    }

}

module.exports = errorHandler

