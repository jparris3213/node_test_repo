const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const mypassword = 'sqlbubly8!'
const PORT = process.env.PORT || 3001;
const app = express();
const database = 'smoor_db_alpha'

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: mypassword,
    database: database
  },
  console.log(`Connected to the courses_db database.`)
);

app.get('/api/formal_scrolls', (req, res) =>
  db.query('SELECT * FROM formal_scrolls', function(err, results) {
      res.json(results);
  })
);

app.post('/api/add_scroll', (req, res) => {
  const name = req.body.name;
  const school = req.body.school;
  const level = req.body.level;
  const cost = req.body.base_cost;
  const base_coin = req.body.base_coin;
  const shotstatus = req.body.shotted;
  const component = req.body.component;
  const notes = req.body.notes;

  const info_array = [name,school,level,cost,base_coin,shotstatus,component,notes]

  db.query(`INSERT INTO formal_scrolls (scroll_name, school, formal_level, base_cost, base_coin, shotted, component, notes) 
    VALUES (?,?,?,?,?,?,?,?)`, info_array, function(error, results){
      if (error) throw error;
      res.json(results);
  })
})

app.listen(PORT, () =>
console.log(`App Listening at http://localhost:${PORT}`)
);