import express from 'express';
import { getQuotes,addQuote } from '../controllers/quote.js';


const router = express.Router();

router.get('/',getQuotes);
router.post('/addquote',addQuote);

export default router;