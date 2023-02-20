const app = require('express')();

app.get('/', (req, res) => 
    res.json({ message: 'Docker is easy!' })
);

const port = process.env.Port || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`))

// Test Update