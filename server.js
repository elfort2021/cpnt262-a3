const path = require('path');
const express = require('express'); 
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(request, response){
// // console.log(response);
// response.send('<h1>Fuck Me Up</h1>'); 

// }); 

app.use(function(request, response) {
  response.status(404);
  response.send('<div style="color: skyblue; text-align: center;"> 404: Ya broke it!</div>');
}); //this is middleware.


const PORT = process.env.PORT || 3000; 

app.listen(PORT, function(){
console.log(`listening on port: ${PORT}`)

})

