const Review = require("../models/reviewModel");

function adminDashboard(req, res) {
    const { username, email, password } = req.body;
    console.log(req.body);
    console.log(req)
    if (username === 'admin' && email === 'test@123.com' && password === 'testadmin') {
        res.status(200).json({ message: 'Success' });
    }
}

module.exports = {adminDashboard};