import { Router } from "express";
import { submitContact } from "../controllers/contact.controller.ts";

const router = Router();

router.post("/", submitContact);

export default router;
