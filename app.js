const express = require('express');
const app = express();
const port = process.env.PORT || 80;

// Serve static files
app.use(express.static('public'));

app.get('/health', (req, res) => {
  res.send('App is running fine 🚀');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
