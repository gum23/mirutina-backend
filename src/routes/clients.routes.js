import { Router } from 'express';
const router = Router();

import * as clientsCtrl from '../controllers/clients.controller.js';

router.get("/clients", clientsCtrl.getClients);

router.get("/client/:id", clientsCtrl.getClient);

router.post("/client", clientsCtrl.createClient);

router.delete("/client/:id", clientsCtrl.deleteClient);

router.put("/client/:id", clientsCtrl.updateClient);

export default router;