const express = require('express');
const mongoDBConnection = require('./config/db.config');
const routehandler = require('./routes');
const app = express();


mongoDBConnection();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', routehandler);


app.use((err, req, res, next) => {
    console.log(req.headers)
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('Bad JSON: ', err.message);
        return res.status(400).send({ message: 'Bad JSON' });
    }
    next();
});


app.use('*', (req, res) => {
    res.status(404).json({ message: "ROUTE NOT FOUND" });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong!' });
});

module.exports = app;