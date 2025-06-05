const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
	res.send('Hello from Dockerized Node.js App!');
});

app.listen(port,'0.0.0.0', () => {
	console.log('App Listening at http://localhost:${port}');
});
