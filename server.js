const express= require('express')
const hbs=require('hbs')


let app=express();

const port =process.env.PORT || 3000
app.set('view engine','hbs')

app.use((req,res,next)=>{
    console.log("on middle ware")

    next();
})

app.get('/',(request,response)=>{
    console.log(request.url)
    response.send({
        name:"areeb",
        job:'web develop',
        home:[{nm:"ads"},{aos:"sadas"}]
    })
})


app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        name:"areeb"
    })
})



app.listen(port,()=>{
    console.log('server is up')
})