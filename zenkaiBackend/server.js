// You would need to install these packages: npm install express pg cors
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001; // Port for the backend server

// Use cors to allow your frontend to make requests to this backend
// app.use(cors());

app.use(cors({
    origin: 'http://localhost:3002' 
}));

// Configure your PostgreSQL connection details
// It's best practice to use environment variables for this
// ... imports remain the same

// Configure your PostgreSQL connection details
const pool = new Pool({
  user: 'aeonzenkai',
  // FIX 1: Removed "/schema" from the end of the host
  host: 'zenkai-instance-1.cnqicgm6ks2p.ap-southeast-1.rds.amazonaws.com', 
  database: 'aeonzenkai',
  password: 'Aeonzenkai2025',
  port: 5432,
  ssl: {
    rejectUnauthorized: false 
  },
});

app.get('/api/notifications', async (req, res) => {
  try {
    // FIX 2: Changed table name from 'notifications' to 'notification'
    const result = await pool.query('SELECT * FROM openfinance.notification where customer_name = \'Fielding Robelet\' ORDER BY created_at DESC');

    console.log("Rows fetched:", result.rows); // Helpful log to see raw data
    
    // IMPORTANT: Ensure these column names (row.app_name, etc.) 
    // actually exist in your 'notification' table!
    const notifications = result.rows.map(row => ({
        id: row.id,
        appName: row.customer_name, 
        appIcon: row.app_icon_name, 
        time: new Date(row.created_at).toLocaleTimeString(),
        title: row.title,
        message: row.content,
    }));

    res.json(notifications);
  } catch (err) {
    console.error("Database Error:", err.message); // Log the specific error message
    res.status(500).send('Server Error');
  }
});

// ... server listen remains the same

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
