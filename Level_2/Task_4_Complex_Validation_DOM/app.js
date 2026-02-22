const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json()); // Essential for dynamic DOM updates
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'));

// Task 4: AJAX Endpoint for Dynamic Results
app.post('/api/validate', (req, res) => {
    const { name, strength } = req.body;
    if (strength < 75) return res.status(400).json({ success: false });
    
    res.json({ 
        success: true, 
        name, 
        timestamp: new Date().toLocaleTimeString() 
    });
});

app.listen(3000, () => console.log('🚀 Task 4 Single-Page System: http://localhost:3000'));