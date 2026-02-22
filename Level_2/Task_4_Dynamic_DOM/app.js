const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Essential for dynamic DOM updates
app.use(express.static('public'));

let database = []; // Task 2: Temporary Storage

app.get('/', (req, res) => res.render('index'));

// Task 4: Endpoint for Dynamic DOM updates (AJAX)
app.post('/api/validate', (req, res) => {
    const { username, email, strength } = req.body;
    
    if (strength < 3) {
        return res.status(400).json({ success: false, message: "Security Level too low!" });
    }

    const entry = { username, email, id: Date.now() };
    database.push(entry);
    res.json({ success: true, user: entry });
});

app.listen(3000, () => console.log('🚀 Task 4 Elite System Live at Port 3000'));