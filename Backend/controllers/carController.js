
const getCars = (db) => (req, res) => {
  db.query('SELECT * FROM car JOIN brands, engine, models WHERE car.Brand_id = brands.Brand_id and car.Model_id = models.Model_id and car.Engine_id = engine.Engine_id ORDER BY Car_id;', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
};

const getCarDetails = (db) => (req, res) => {
  const { carId } = req.params;
  const sql = 'SELECT * FROM car JOIN brands, engine, models WHERE car.Brand_id = brands.Brand_id and car.Model_id = models.Model_id and car.Engine_id = engine.Engine_id and Car_id = ?;' ;  
  db.query(sql, carId , (err, results) => { 
    if(err) {
      console.error('Error: ',err)
      res.status(500).json({ error: 'Internal Server Error' });
    }
    else {
      res.json(results)
    }
  });
}

const createCar = (db) => async (req, res) => {
  console.log('Received data:', req.body);
  const { Brand_id, Engine_id, Model_id, Production_year, Color, url } = req.body;

  if (!Brand_id || !Engine_id || !Model_id || !Production_year || !Color || !url) {
    return res.status(400).json({ error: 'All fields required' });
  }

  try {
    const sql = 'INSERT INTO car (Brand_id, Engine_id, Model_id, Production_year, Color, url) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [Brand_id, Engine_id, Model_id, Production_year, Color, url];

    await db.query(sql, values);

    res.json({ message: 'Car added to db'});
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const updateCar = (db) => async (req, res) => {
  const { carId } = req.params; 
  const { Brand_id, Engine_id, Model_id, Production_year, Color, url } = req.body;
  console.log(carId);
  console.log(req.body);

  if (!Brand_id || !Engine_id || !Model_id || !Production_year || !Color || !url) {
    return res.status(400).json({ error: 'All fields required' });
  }

  try {
    const sql = 
    `UPDATE car 
      SET Brand_id = ?, Engine_id = ?, Model_id = ?, Production_year = ?, Color = ?, url = ?
      WHERE Car_id = ?;`;
    const values = [Brand_id, Engine_id, Model_id, Production_year, Color, url, carId];

    const results = await db.query(sql, values);

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Car not found' });
    }

    res.json({ message: 'Car updated successfully' });
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const deleteCar = (db) => async (req, res) => {
  const carId = req.params.carId;
  console.log(carId);

  if (!carId) {
    return res.status(400).json({ error: 'Car ID is required' });
  }

  try {
    const sql = 'DELETE FROM car WHERE Car_id = ?';
    const values = [carId];

    const results = await db.query(sql, values);

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Car not found' });
    }

    res.json({ message: 'Car deleted from db' });
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getOffer2 = (db) => (req, res) => {
  db.query('SELECT * FROM offer;', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
};

const getCarsPage = (db) => async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; 
    const pageSize = parseInt(req.query.pageSize) || 10;

    const offset = (page - 1) * pageSize;

    const query = `SELECT * FROM car JOIN brands, engine, models WHERE car.Brand_id = brands.Brand_id and car.Model_id = models.Model_id and car.Engine_id = engine.Engine_id ORDER BY Car_id LIMIT ${pageSize} OFFSET ${offset};`;

    const results = await new Promise((resolve, reject) => {
      db.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });

    res.json(results);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getCarResevations = (db) => (req, res) => {
  const { carId } = req.params;
  const sql = 'SELECT * FROM reservations WHERE car_id = ?;' ;  
  db.query(sql, carId , (err, results) => { 
    if(err) {
      console.error('Error: ',err)
      res.status(500).json({ error: 'Internal Server Error' });
    }
    else {
      res.json(results)
    }
  });
}

const createCarResevations =  (db) => async (req, res) => {
  console.log('Received');
  console.log('Received data:', req.body);
  const {user_id, car_id, dateUTC } = req.body;
  if (!user_id || !car_id || !dateUTC) {
    return res.status(400).json({ error: 'All fields required' });
  }

  try {
    const sql = 'INSERT INTO reservations (user_id, car_id, date) VALUES (?, ?, ?)';
    const values = [user_id, car_id,  dateUTC];

    await db.query(sql, values);

    res.json({ message: 'Reservation added to db'});
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}


module.exports = { getCars, getCarDetails, createCar, updateCar, deleteCar, getOffer2, getCarsPage, getCarResevations, createCarResevations};
