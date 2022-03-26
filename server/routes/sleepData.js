import express from 'express';

import {
  getSleep,
  createSleep,
  updateSleep,
  deleteSleep,
} from '../controllers/sleepData.js';
import authMiddleWare from '../middleware/auth.js';

const router = express.Router();

router.get('/:userId', getSleep);
router.post('/', authMiddleWare, createSleep);
router.patch('/:id', authMiddleWare, updateSleep);
router.delete('/:id', authMiddleWare, deleteSleep);

export default router;
