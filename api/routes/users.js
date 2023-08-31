import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updatedUser,
} from "../controllers/user.js";

const router = express.Router();

//UPDATE
router.put("/:id", updatedUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

//GETALL
router.get("/", getUsers);

export default router;
