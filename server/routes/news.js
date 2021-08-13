import express from 'express';
import {getNews,addNews} from '../controllers/news.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.get('/',getNews);
router.post('/addnews',upload.single('image'),addNews);

export default router;