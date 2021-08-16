import express from 'express';
import { getVideoClip,addvideoClip } from '../controllers/videoClip.js';


const router = express.Router();

router.get('/',getVideoClip);
router.post('/addvideoclip',addvideoClip);

export default router;