import express from 'express';
import cors from 'cors';
import tweetRoutes from './routes/tweets.js';

const app = express();
app.use('/tweets', tweetRoutes);


const allowedOrigins = ['http://localhost:3000/'];
const options = {
  origin: allowedOrigins
};

app.use(cors(options));
app.listen(3000, () => 
  console.log('App listening on port 3000!'),
);
