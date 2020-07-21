var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
// conexion a mongoose
mongoose.connect('mongodb+srv://usuario1:J75DYJgGNLx88DuT@anurosdbcluster-encqg.mongodb.net/Anuros?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true

  }).then(() => {
    console.log('Conectado a Mongo DB Atlas')
  })
  .catch(err => console.log(err));


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var anurosRouter = require('./routes/anuros'); //Api rest --Back end
var frontAnurosRouter = require('./routes/front_anfibio');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', indexRouter);
app.get('/users', usersRouter);
app.use('/anuros/api',anurosRouter);
app.use('/front/anuros',frontAnurosRouter);


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
  res.render('error');
});

module.exports = app;
