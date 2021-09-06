const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const Client = require('../../models/Client');

// @route       GET api/client
// @desc        Get all clients
// @access      Private
router.get('/', auth, async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// @route       DELETE api/client
// @desc        Delete all clients
// @access      Private
router.delete('/', auth, async (req, res) => {
    try {
        await Client.deleteMany({});
        res.json({ msg: 'All client data removed' });
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
