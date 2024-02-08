const express = require('express');
const app = express();

/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */

function positiveIntegerHandler(req, res, next){
    const number = parseInt(req.query.number);
    if(Number.isInteger(number) && number > 0){
        res.status(200).send("Success: The number is a positive integer.");
    }
    else{
        res.status(400).send("Error: The 'number' parameter must be a positive integer.")
    }
}

app.get('/positive', positiveIntegerHandler);

const port = 2000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});