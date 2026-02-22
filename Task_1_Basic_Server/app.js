const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serves your high-contrast CSS

// Task 2: Temporary session storage
let currentUser = null;

app.get('/', (req, res) => res.render('index'));

// Dashboard route with data protection
app.get('/dashboard', (req, res) => {
    if (!currentUser) return res.redirect('/');
    res.render('dashboard', { user: currentUser });
});

app.post('/login', (req, res) => {
    const { name, email } = req.body;
    
    // Task 2: Server-side validation (Name check)
    if (!name || name.length < 3) return res.status(400).send("Invalid Operator Name");

    currentUser = { 
        name, 
        email, 
        loginTime: new Date().toLocaleTimeString() 
    };
    
    res.redirect('/dashboard');
});

app.listen(3000, () => console.log('🚀 Elite Dashboard running at http://localhost:3000'));