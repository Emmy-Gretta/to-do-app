const express = require('express');
const mongoose = require(mongoose);
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4500;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser,json());
app.use(express.json());
app.use(cors());
app.use('/task', todoRoutes);

//Database connection
mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (err) => {
   console.log(err);
});
db.once('open', () => {
   console.log('Database connected successfully');
})

app.get('/', (req, res) => {
   res.send('Welcome to our todo app');
})

app.listen(PORT, () => {
   console.log(`Server is running on http://locahost:${PORT}`);
})