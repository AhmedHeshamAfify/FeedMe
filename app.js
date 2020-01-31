const createError = require('http-errors');
const express = require('express');
const client = require('./configurations/dbConfig')
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const lectures = require('./routes/lecturesRoute');

const app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/lectures', lectures);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
res.json({
  message: err.message,
  error: err
});
});

app.listen(3000, () => console.log('server started'))
module.exports = app;
