const express = require('express')

const app = express()

app.get('/',function(request,response,next){
    response.json({message:"Server says: Hello"})
})

app.listen(3000,function(){
    console.log('Server started on port 3000')
})