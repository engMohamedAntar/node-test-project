const express= require('express');
const app= express();

app.get('/v1/', (req,res)=>{
    res.send('Hello dudes');
})

app.listen(5000, ()=>{
    console.log("server is running on http://localhost:5000 docksh");
})