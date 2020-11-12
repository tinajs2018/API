var express=require('express');
var app=express();
var bodyParser=require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var ingredient=[
    {
        "id":"jacob taylaoy",
        "text":"dry clearener"
    },
    {
        "id":"miller",
        "text":"cutlery"
    },
    {
        "id":"heather",
        "text":"menze"
    },
    {
        "id":"janet",
        "text":"bleander"
    }
];
app.get('/ingredient',function(request,response){
response.send(ingredient);
});
app.post('/ingredient',function(request,response){
var ingredient=request.body;
if (! ingredient || ingredient.text==="") {
 response.status(500) .send({error:"You id timeline has passed "}) ; 
}
else{
    ingredient.push(ingredient);
    response.status(200).send(ingredient);
}
});


app.put('/ingredient ',function(request,response){
 var ingredientId=request.params.ingredientId;
 var text=request.body.text;
 if(!newText||newText===""){
     response.status(500).send({error:"please provide your id"})
 }else{
     var objectFound=false;
    for(var x=0; x<ingredient.length; x++){
var ing=ingredients[x];
if(ing.id===require.params.ingredientId){
ingredient[x].text= newText;
objectFound=true;
break
}
 }
 if (!objectFound){
     response.status(500).send({error:"ingredient is not found"})
 }else{
response.send(ingredient);
 }
}
});
app.listen(3000,function(){
  console.log("The server is accessed by id number 20fg")  
});