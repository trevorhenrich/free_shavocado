import express from 'express';
import cors from 'cors'

import {getPosts} from '../controllers/posts.js'

const router = express.Router();

router.get('/', cors(), getPosts);

export default router;