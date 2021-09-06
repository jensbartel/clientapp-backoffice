// this is for one-time use to register the admin user
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

const jwt = require('jsonwebtoken');
// const config = require('config');
const { genSalt, hash } = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const Admin = require('../../models/Admin');

// @route   POST api/admin
// @desc    Register admin
// @access  Public
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        let admin = await Admin.findOne({ email });

        if (admin) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        admin = new Admin({
            email,
            password,
        });

        const salt = await genSalt(10);
        admin.password = await hash(password, salt);

        await admin.save();

        const payload = {
            admin: {
                id: admin.id,
            },
        };

        jwt.sign(
            payload,
            process.env.jwtSecret,
            {
                expiresIn: 360000,
            },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        if (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
});

module.exports = router;
