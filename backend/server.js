require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/routes')

const app = express();

app.use(express.json());
app.use(
    (req, res, next) => {
        console.log(req.path, req.method);
        next();
    }
);

app.use('/api', workoutRoutes);

app.listen(process.env.PORT, () => {
    console.log('listening on port ', process.env.PORT)
});