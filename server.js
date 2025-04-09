const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Show guestbook entries
app.get('/', (req, res) => {
  db.all('SELECT * FROM guests ORDER BY created_at DESC', (err, rows) => {
    if (err) {
      return res.status(500).send("Error loading messages");
    }
    res.render('index', { guests: rows });
  });
});

// Handle form submission
app.post('/register', (req, res) => {
  const { name, email, message } = req.body;
  const stmt = db.prepare('INSERT INTO guests (name, email, message) VALUES (?, ?, ?)');
  stmt.run(name, email, message, err => {
    if (err) {
      return res.status(500).send("Failed to register");
    }
    res.redirect('/');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
