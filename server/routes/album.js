import express from 'express';
import { getAlbum,addAlbum } from '../controllers/album.js';
import auth from '../middleware/auth.js';


const router = express.Router();

router.get('/',getAlbum);
router.post('/addalbum',auth,addAlbum);

export default router;