const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, CI/CD! Testing PR and CI Deployment');
});
module.exports = app;