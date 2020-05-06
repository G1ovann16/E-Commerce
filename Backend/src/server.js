const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = express();



require('./database');
app.use(express.json())
app.use(require('./routes/index'));

app.set('port', PORT)
app.listen(PORT, ()=> {
    console.log('Server on Port', PORT)
});