const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');

const app = express();
const port = process.env.PORT || 8085;


app.use(cors({ origin: true, credentials: true }));


app.use(express.json());


app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api/users', userRoutes);

const stories = require('./routes/stories');
app.use('/routes/stories', stories);

//const conn_str = 'mongodb+srv://djgonzalez0209:5RZbthKB1xAY8RAl@cluster0.j5ybklc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const conn_str = 'mongodb+srv://copillsw:I093CN88d3l51Vib@cluster0.5f2gl4d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {})
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log('MongoDB Connection Succeeded...');
  })
  .catch(err => {
    console.log(`Error in DB Connection ${err}`);
  });