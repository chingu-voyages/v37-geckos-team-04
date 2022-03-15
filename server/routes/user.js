import express from 'express';

import { getUsers, signUp, logIn } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/login', logIn);
router.post('/signup', signUp);

export default router;
