import express from 'express';
import {getNews,addNews} from '../controllers/news.js';
import upload from '../middleware/upload.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/',getNews);
router.post('/addnews',auth,upload.single('image'),addNews);

export default router;