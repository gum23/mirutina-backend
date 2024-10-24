import { Router } from 'express';
import * as ctrlInstructors from '../controllers/instructors.controllers.js';

const router = Router();

router.get('/instructors/:id', ctrlInstructors.getInstructors)


export default router;