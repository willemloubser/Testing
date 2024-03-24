const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Use the PORT environment variable if available

app.get('/', (req, res) => {
    res.send('dit moet werk');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`HTTP server running on port ${port}`);
});