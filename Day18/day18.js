const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 2000;

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
});

const User = mongoose.model('Usee', userSchema);
mongoose.connect('mongodb+srv://avinash03082003:Js2pNrznztrl0Kvy@projectfrt.ppn0dmb.mongodb.net/ProjectFRT?retryWrites=true&w=majority');

async function getAllUsers(req, res) {
    try{
        const users = await User.find();
        res.status(201).send(users);
        console.log("Users:", users);
    }
    catch(err){
        console.log('Error getting users from Databasel',err.message);
        res.status(500).send(err.message);
    }
}

app.get('users', getAllUsers)

app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`);
});