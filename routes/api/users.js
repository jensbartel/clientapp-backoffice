const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route       GET api/users
// @desc        Get all users
// @access      Private
router.get('/', auth, async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// ADD A ROUTE TO DELETE ALL CLIENTS (OR ALL CLIENTS BELONGING TO PARTICULAR USER)?

module.exports = router;
