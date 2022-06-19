import express from 'express';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
app.use('/hello', postRoutes);


const allowedOrigins = ['http://localhost:3000/hello'];
const options = {
  origin: allowedOrigins
};

app.use(cors(options));
app.listen(3000, () => 
  console.log('App listening on port 3000!'),
);
