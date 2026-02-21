import { Router } from "express";
import { verifyJWT, verifyRoles } from "@/middlewares/auth";
import {
  fetchCustomerById,
  fetchCustomers,
  getCustomerProfile,
} from "@/controllers/customers.controller";

const router = Router();

router.route("/").get(verifyJWT, verifyRoles("ADMIN"), fetchCustomers);
router.route("/:id").get(verifyJWT, verifyRoles("ADMIN"), fetchCustomerById);

export default router;
