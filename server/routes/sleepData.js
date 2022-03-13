import express from 'express';

import {
  getSleep,
  createSleep,
  updateSleep,
  deleteSleep,
} from '../controllers/sleepData.js';

const router = express.Router();

router.get('/', getSleep);
router.post('/', createSleep);
router.patch('/:id', updateSleep);
router.delete('/:id', deleteSleep);

export default router;
