import express from 'express';
import {
  loginEmployee,
  loginAdmin,
  updateAdminSettings
} from '../controllers/auth.controller.js';
import { protect, authorizeRoles } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/employee/login', loginEmployee);
router.post('/admin/login', loginAdmin);
router.put('/admin/settings', protect, authorizeRoles('admin'), updateAdminSettings);

export default router;
