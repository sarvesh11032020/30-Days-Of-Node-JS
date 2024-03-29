const express = require('express');
const app = express();

// In-memory cache
const cache = {};

/**
 * Caching middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function cachingMiddleware(req, res, next) {
    const cacheKey = req.url;

    if (cacheKey === '/') {
        return next();
    }

    if (cache[cacheKey] && cache[cacheKey].expirationTime > Date.now()) {
        console.log('Cached response found');
        return res.send(cache[cacheKey].data);
    }

    console.log('Cache miss, processing the request');
    const originalSend = res.send;

    res.send = function (body) {
        cache[cacheKey] = {
            data: body,
            expirationTime: Date.now() + 10 * 1000,
        };
        originalSend.call(this, body);
    };

    next();
}


app.use(cachingMiddleware);


app.get('/example', (req, res) => {
    setTimeout(() => {
        res.send('This is the response.');
    }, 2000); // Simulate a 2-second delay
});

const port = 2000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});