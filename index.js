const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

require('./routes/testRoutes')(app);

const PORT = process.env.PORT || 9000;
app.listen(PORT);
