import { Router } from 'express';
const router = Router();

import * as personalCtrl from '../controllers/personal.controller.js';

router.get("/personals", personalCtrl.getPersonals);

router.get("/personal/:id", personalCtrl.getPersonal);

router.post("/personal", personalCtrl.createPersonal);

router.delete("/personal/:id", personalCtrl.deletePersonal);

router.put("/personal/:id", personalCtrl.updatePersonal);

export default router;