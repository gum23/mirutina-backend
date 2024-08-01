import { Router } from 'express';

import * as ctrlRutinas from '../controllers/rutinas.controllers.js';

const router = Router();

router.post("/rutina", ctrlRutinas.createRutina);

export default router;