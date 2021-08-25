import express from 'express';
import { getVideoClip,addvideoClip, deleteVideoClip } from '../controllers/videoClip.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/',getVideoClip);
router.post('/addvideoclip',auth,addvideoClip);
router.delete('/:id',deleteVideoClip);

export default router;