/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function greetHandler(req, res) {
    const name = req.query.name || "Guest";
    res.send(`Hello, ${name}!`);
}

greetHandler({ query: { name: "PSA"}},{
    send: (message) => console.log(message)
});

greetHandler({ query: {}},{
    send: (message) => console.log(message)
});