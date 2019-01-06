const express=require('express');
const app=express();
app.get("/darshit/api",(req,res,next)=>{
	const customer=[{id:1,firstname:'hasmukhBhai'},{id:2,firstname:'snehaben'},{id:3,firstname:'rathodbhai'}];
	res.json(customer);
});
app.get("/hasmukh/api",(req,res,next)=>{
	const custome="Gajjar is great";
	res.json(custome);
})
app.listen(7002,(err)=>{
	console.log('my server is start');
});