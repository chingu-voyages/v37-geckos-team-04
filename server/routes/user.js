import express from 'express';

import { signUp, logIn } from '../controllers/user.js';

const router = express.Router();

router.post('/login', logIn);
router.post('/signup', signUp);

export default router;
