const express=require('express');
const app =express();
const port=5000;
app.get('/',(req,res)=>{
    res.send('Iphone hunter is running on pranto biva is sweet ')
});
app.listen(port,()=>{
    console.log(`Iphone server is running fff port:${port}`)
})