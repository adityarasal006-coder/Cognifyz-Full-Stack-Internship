const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); 

let currentUser = null; //

app.get('/', (req, res) => res.render('index'));

app.post('/login', (req, res) => {
    const { name, email } = req.body;
    if (!name || name.length < 3) return res.status(400).send("Invalid Operator Name"); //
    
    // Store the data to pass to the next page
    currentUser = { 
        name, 
        email, 
        loginTime: new Date().toLocaleTimeString() 
    };
    res.redirect('/dashboard');
});

app.get('/dashboard', (req, res) => {
    if (!currentUser) return res.redirect('/'); 
    res.render('dashboard', { user: currentUser });
});

app.listen(3000, () => console.log('🚀 Elite System Live at http://localhost:3000'));   