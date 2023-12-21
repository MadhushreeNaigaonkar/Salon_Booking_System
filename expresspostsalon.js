var express = require('express');
var mysql = require('mysql2');
var cors = require('cors');

var app = express();



app.use(cors());


app.listen(9000,function(){
	console.log("server started on portno: 9000")
})


var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'salon_booking_system'
});


db.connect(err => {
  if (!err) {
	console.log('Connected to MySQL database');
  }
  else
	console.error('Error connecting to MySQL database:', err);
  
});

app.use(express.json());

// Route to handle login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM customer WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      if (results.length > 0) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Login failed. Please check your credentials.' });
      }
    }
  });
});

// Route to handle registration
app.post('/register', (req, res) => {
  const { name, phone, address, email, password } = req.body;

  if (!name || !phone || !address || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = 'INSERT INTO customer (customer_name, contact_no, email, address, password) VALUES (?, ?, ?, ?, ?)';
  const values = [name, phone, email, address, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into database:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    console.log('Data inserted successfully');
    res.status(200).json({ message: 'Registration successful' });
  });
});


// Route to handle password update
app.post('/updatepwd', (req, res) => {
  const { email, prev_password, new_password } = req.body;

  if (!email || !prev_password || !new_password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Check if the current password is correct
  const checkPasswordQuery = 'SELECT * FROM customer WHERE email = ? AND password = ?';
  db.query(checkPasswordQuery, [email, prev_password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length > 0) {
      // Update the password
      const updatePasswordQuery = 'UPDATE customer SET password = ? WHERE email = ?';
      db.query(updatePasswordQuery, [new_password, email], (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }

        console.log('Password updated successfully');
        res.status(200).json({ message: 'Password updated successfully' });
      });
    } else {
      res.status(401).json({ message: 'Current password is incorrect' });
    }
  });
});




