import express from 'express';
import cors from 'cors'
import {getTweets} from '../controllers/getTweets.js'

const router = express.Router();

router.get('/', cors(), getTweets);

export default router;