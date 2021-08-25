import express from 'express';
import {getNews,addNews, deleteNews} from '../controllers/news.js';
import upload from '../middleware/upload.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/',getNews);
router.post('/addnews',auth,upload.single('image'),addNews);
router.delete('/:id',deleteNews);

export default router;