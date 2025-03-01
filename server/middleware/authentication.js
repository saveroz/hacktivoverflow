const jwt = require('jsonwebtoken')
const Secret=process.env.SECRET
const User = require('../models/User')

function authentication(req,res,next){    
    try {
        // console.log("masuk ke authnetication")
        const token = req.headers.token
        const decode = jwt.verify(token, Secret)
        req.decode = decode
        let id = req.decode.id
        // console.log(req.decode)

        User.findById(id)
        .then(user=>{
            
            if(user){
                next()
            }
            else{
                res.status(401).json({
                    message : 'You are not authenticated Users'
                })
            }
        })
        
    }
    catch{
        // console.log(req.headers.token)
        res.status(401).json({
            message: 'You are not authenticated User'
        })
       
    }
}

module.exports = authentication
