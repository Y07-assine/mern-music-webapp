import express from 'express';
import { getAlbum,addAlbum, deleteAlbum } from '../controllers/album.js';
import auth from '../middleware/auth.js';


const router = express.Router();

router.get('/',getAlbum);
router.post('/addalbum',auth,addAlbum);
router.delete('/:id',deleteAlbum);

export default router;