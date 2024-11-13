const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form submission received:', { name, email, message });

    res.redirect('/completed.html');
});

app.get('/completed.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'completed.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
