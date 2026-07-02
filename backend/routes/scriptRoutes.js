import express from 'express';
import { createScript, getScripts, getScript, updateScript, deleteScript } from '../controllers/scriptController.js';

const router = express.Router();

router.post('/', createScript);
router.get('/', getScripts);
router.get('/:id', getScript);
router.put('/:id', updateScript);
router.delete('/:id', deleteScript);

export default router;
