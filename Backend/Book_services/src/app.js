const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
//app.set('view engine', 'ejs');

const book = require('./database/models/Book');

app.use('/test', (res, req) => {
    res.json("test")
})
//app.use(require('./router'));

/* Rutas no exitentes */
//app.use(express.static('public'));
//app.use('/*', express.static('public'));

module.exports = app;