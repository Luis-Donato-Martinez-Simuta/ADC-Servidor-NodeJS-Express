const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const user = require('./routes/users.routes');
const client = require('./routes/client.routes');
const state = require('./routes/state.routes');
const municipality = require('./routes/municipality.routes');
const index = require('./routes/index.routes');
const location = require('./routes/location.routes');


const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json({
  limit: '50mb'
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/api/user', user);
app.use('/api/client', client);
app.use('/api/states', state);
app.use('/api/municipality', municipality);
app.use('/api/location', location);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;