// Import the Express module and any third-party middleware
const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');

// Create n instance of the Express application
const app = express();

// Integrate 3rd party middleware
app.use(morgan('dev')); // Logger
app.use(bodyParser.json()); // Body Paser... converts to JavaScript Object

// Root rout to send a greeting
app.get('/', (req, res) => {
    res.send('Welcome to my Express server!')
});

// Send a breif description
app.get('/about', (req, res) => {
    res.send('This server is set up using Express and demonstrates middleware integration.');
});

// Handle non-existent routes by sending an error message and status code
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Listne on Port 3000... will likely change in the real world
const PORT = 3000
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});