import express from 'express';
import { getAlbum,addAlbum } from '../controllers/album.js';


const router = express.Router();

router.get('/',getAlbum);
router.post('/addalbum',addAlbum);

export default router;