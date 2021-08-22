import express from 'express';
import { getQuotes,addQuote } from '../controllers/quote.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/',getQuotes);
router.post('/addquote',auth,addQuote);

export default router;