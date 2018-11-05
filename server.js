require('dotenv').config()

const
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	mongoose = require('mongoose'),
	MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/react-jwt',
	PORT = process.env.PORT || 4000,
	usersRoutes = require('./routes/users.js'),
	sequencesRoutes = require('./routes/sequences.js'),
	path = require('path');
	


mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

// Express Configuration
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

app.get('/api', (req, res) => {
	res.json({message: "API root."})
})
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use('/api/users', usersRoutes)
app.use('/api/sequences', sequencesRoutes)

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})