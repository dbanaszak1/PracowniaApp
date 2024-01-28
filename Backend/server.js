const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const carController = require('./controllers/carController');
const authController = require('./controllers/authController');
const dotenv = require('dotenv');

dotenv.config({path: './.env'})

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the backend.');
});
app.get('/api/cars', carController.getCars(db));
app.post('/api/cars', carController.createCar(db));
app.delete('/admin/cars/:carId', carController.deleteCar(db));
app.put('/admin/cars/:carId', carController.updateCar(db));
app.get('/api/offer',carController.getOffer2(db));
app.get('/api/cars2', carController.getCarsPage(db));
app.get('/api/details/:carId', carController.getCarDetails(db));
app.post('/auth/register', authController.register(db));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
