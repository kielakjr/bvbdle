const express = require('express');
const app = express();
const PORT = 3000;
const matchesRouter = require('./routes/matches');
const playersRouter = require('./routes/players');
const errorRouter = require('./routes/error');

app.use('/api', matchesRouter);

app.use('/api', playersRouter);

app.use(errorRouter);

app.listen(PORT);
