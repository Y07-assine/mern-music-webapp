import express from 'express';
import { getVideoClip,addvideoClip } from '../controllers/videoClip.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/',getVideoClip);
router.post('/addvideoclip',auth,addvideoClip); 

export default router;