const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like your HTML and CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form submission received:', { name, email, message });

    // Redirect to a 'completed' page
    res.redirect('/completed.html');
});

// Serve the 'completed.html' page
app.get('/completed.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'completed.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
