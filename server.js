const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

connectDB();

// middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.json({ msg: 'ClientApp Backoffice -- Welcome' }));

// routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/admin', require('./routes/api/admin'));
app.use('/api/clients', require('./routes/api/clients'));
app.use('/api/users', require('./routes/api/users'));

// if (process.env.NODE_ENV === 'production') {
// app.use(express.static('client/build'));
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
// }

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
