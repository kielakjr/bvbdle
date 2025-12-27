const express = require('express');
const app = express();
const PORT = 3000;
const matchesRouter = require('./routes/matches');
const errorRouter = require('./routes/error');

app.use(matchesRouter);
app.use(errorRouter);

app.listen(PORT);
