import { Router } from "express";
const router = Router();

import * as gymCtrl from '../controllers/gimnasio.controller.js';

router.get("/gimnasios", gymCtrl.getGimnasios);

router.get("/gimnasio/:id", gymCtrl.getGimnasio);

router.post("/gimnasio", gymCtrl.createGimnasio);

router.delete("/gimnasio/:id", gymCtrl.deleteGimnasio);

router.put("/gimnasio/:id", gymCtrl.updateGimnasio);


export default router;