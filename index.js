const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
let cors = require('cors'); 
const bodyParser = require('body-parser');
const path = require('path');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
dotenv.config();


// Routes
const users = require ('./routes/users');
const project = require ('./routes/project');





// exporting header  
const corsOptions = {
  exposedHeaders: 'x-auth-token',
};
app.use(cors(corsOptions));
app.use(express.static("express"));
    

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(fileUpload());





/** Routes */
app.get ('/', (req, res) => {
  res.send ('silence is golden');
});
app.use ('/api/v1/users', users);
app.use ('/api/v1/project', project);
 
/*** Database */
//mongodb://localhost/tmanager

mongoose
  .connect (process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
  .then (() => console.log ('Connected to the database'))
  .catch (e => console.log ('Could not connect to database', e.message));

const port = process.env.PORT || 4000;
app.listen(process.env.PORT || 4000, function(){
  console.log("Environement Mongo db Values "+process.env.MONGODB_URI); 
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
// app.listen (port, console.log ('listening on port: ' + port));
