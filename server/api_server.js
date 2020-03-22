const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

const port = process.env.PORT || 5500;
app.listen(port);

console.log('App is listening on port ' + port);