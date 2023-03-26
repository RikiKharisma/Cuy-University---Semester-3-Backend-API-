const response = (statusCode, data , message,res)=>{
    res.status(statusCode).json({
        playLoad:{
            status_code:statusCode,
            datas:data,
            message:message
        },
        pagiantion:{
            prev:"",
            next:"",
            max:""
        }
    })
}

module.exports = response