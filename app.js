const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// TASK 2: Temporary server-side storage
let tempStorage = [];

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    // TASK 2: Server-side validation
    if (!name || name.length < 3) {
        return res.status(400).send("Error: Name must be at least 3 characters.");
    }
    if (!email || !email.includes('@')) {
        return res.status(400).send("Error: Invalid email format.");
    }

    // TASK 2: Store validated data in temporary storage
    tempStorage.push({ name, email, date: new Date() });
    console.log("Current Temp Storage:", tempStorage);

    // FIXED: Passing both name and email to prevent the ReferenceError
    res.render('success', { name, email });
});

app.listen(3000, () => console.log('🚀 Server running at http://localhost:3000'));