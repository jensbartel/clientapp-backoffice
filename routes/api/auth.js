const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

const { compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Admin = require('../../models/Admin');
const { v4: uuidv4 } = require('uuid');

// @route   GET api/auth
// @desc    Get logged in user
// @access  Public
router.get('/', auth, async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin.id);
        res.json(admin);
    } catch (err) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// @route   POST api/auth
// @desc    Auth user and get token
// @access  Public
router.post(
    '/',
    [
        check('email', 'Please enter a correct email.').isEmail(),
        check('password', 'Password is required.').isLength({ min: 1 }),
        check('password', 'Password must be at least six characters.').isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            let err = errors.array();
            err = err.map(error => ({ ...error, id: uuidv4() }));
            return res.status(400).json({ errors: err });
            // return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            let admin = await Admin.findOne({ email });

            if (!admin) {
                return res.status(400).json({ errors: [{ msg: 'Invalid credentials.' }] });
            }

            const isMatch = await compare(password, admin.password);
            if (!isMatch) {
                return res.status(400).json({ errors: [{ msg: 'Invalid credentials.' }] });
            }

            const payload = {
                admin: {
                    id: admin.id,
                },
            };

            jwt.sign(
                payload,
                process.env.jwtSecret,
                {
                    expiresIn: 86400, // = 24 hrs
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(error.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
