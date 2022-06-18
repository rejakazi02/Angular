
const exprass = require('exprass');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');




const app = exprass();

app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));
app.listen(3000, () => console.log('Server Started at Port: 3000'));